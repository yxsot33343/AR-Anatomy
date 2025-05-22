document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.models-grid');

  const cardTpl = model => `
    <div class="model-card">
      <div class="model-preview">
        <model-viewer
          src="${model.modelUrl}"
          alt="${model.name}"
          camera-controls
          auto-rotate
          loading="lazy"
          style="width:100%; height:100%; --poster-color:transparent">
        </model-viewer>
      </div>
      <div class="model-info">
        <h3>${model.name}</h3>
        <p>${model.description}</p>
      </div>
      <div class="model-actions">
        <a href="${model.exploreUrl}" target="_blank" class="explore-button">Ver más</a>
      </div>
    </div>
  `;

  const baseModels = [
    {
      name: 'Sistema muscular',
      description: 'Sistema muscular humano',
      modelUrl: 'Sistemamuscular/Sistema_muscular.glb',
      exploreUrl: 'detalle/sistema_muscular.html'
    },
    {
      name: 'Músculos lisos',
      description: 'Tejido muscular involuntario de órganos internos.',
      modelUrl: 'Sistemamuscular/Musculos_lisos.glb',
      exploreUrl: 'detalle/musculos_lisos.html'
    },
    {
      name: 'Músculo cardíaco',
      description: 'Músculo del corazón, de acción involuntaria.',
      modelUrl: 'Sistemamuscular/Musculo_cardiaco.glb',
      exploreUrl: 'detalle/musculo_cardiaco.html'
    },
    {
      name: 'Fascias',
      description: 'Tejido que envuelve músculos y órganos.',
      modelUrl: 'Sistemamuscular/Fascias.glb',
      exploreUrl: 'detalle/fascias.html'
    },
    {
      name: 'Sistema esquelético',
      description: 'Soporte y protección del cuerpo.',
      modelUrl: 'Sistemaesqueletico/sistema_esqueletico.glb',
      exploreUrl: 'detalle/sistema_esqueletico.html'
    },
    {
      name: 'Fémur',
      description: 'Hueso largo que sostiene el muslo.',
      modelUrl: 'Sistemaesqueletico/Femur.glb',
      exploreUrl: 'detalle/femur.html'
    },
    {
      name: 'Cartílago',
      description: 'Tejido flexible que amortigua y da forma.',
      modelUrl: 'Sistemaesqueletico/cartilago.glb',
      exploreUrl: 'detalle/cartilago.html'
    },
    {
      name: 'Costillas',
      description: 'Huesos que protegen el pecho.',
      modelUrl: 'Sistemaesqueletico/costillas.glb',
      exploreUrl: 'detalle/costillas.html'
    },
    {
      name: 'Pelvis y fémur',
      description: 'Pelvis y fémur: Sostienen el cuerpo, conectan las piernas y permiten el movimiento.',
      modelUrl: 'Sistemaesqueletico/pelvis_y_femur.glb',
      exploreUrl: 'detalle/pelvis_y_femur.html'
    },
    {
      name: 'Cráneo',
      description: 'Hueso que protege el cerebro.',
      modelUrl: 'Sistemaesqueletico/Cráneo.glb',
      exploreUrl: 'detalle/cranio.html'
    },
    {
      name: 'Arteria',
      description: 'Vaso que lleva sangre del corazón al cuerpo.',
      modelUrl: 'Sistemacirculatorio/arteria.glb',
      exploreUrl: 'detalle/arteria.html'
    },
    {
      name: 'Capilares',
      description: 'Vasos muy finos que conectan arterias y venas.',
      modelUrl: 'Sistemacirculatorio/Capilares.glb',
      exploreUrl: 'detalle/capilares.html'
    },
    {
      name: 'Corazón',
      description: 'Órgano que bombea sangre por el cuerpo.',
      modelUrl: 'Sistemacirculatorio/corazon.glb',
      exploreUrl: 'detalle/corazon.html'
    },
    {
      name: 'Glóbulos rojos',
      description: 'Células que transportan oxígeno.',
      modelUrl: 'Sistemacirculatorio/globulos_rojos.glb',
      exploreUrl: 'detalle/globulos_rojos.html'
    },
    {
      name: 'Vasos sanguíneos',
      description: 'Conductos que transportan sangre.',
      modelUrl: 'Sistemacirculatorio/vasos_sanguineos.glb',
      exploreUrl: 'detalle/vasos_sanguineos.html'
    },
    {
      name: 'Venas',
      description: 'Vasos que llevan sangre al corazón.',
      modelUrl: 'Sistemacirculatorio/venas.glb',
      exploreUrl: 'detalle/venas.html'
    },
    {
      name: 'Sistema digestivo',
      description: 'Encargado de procesar los alimentos.',
      modelUrl: 'Sistemadigestivo/sistema_digestivo.glb',
      exploreUrl: 'detalle/sistema_digestivo.html'
    },
    {
      name: 'Páncreas',
      description: 'Órgano que regula el azúcar y ayuda a la digestión.',
      modelUrl: 'Sistemadigestivo/pancreas.glb',
      exploreUrl: 'detalle/pancreas.html'
    },
    {
      name: 'Intestino grueso y delgado',
      description: 'Absorben nutrientes y agua, y forman las heces.',
      modelUrl: 'Sistemadigestivo/intestino_grueso_delgado.glb',
      exploreUrl: 'detalle/intestino_grueso_delgado.html'
    },
    {
      name: 'Hígado',
      description: 'Órgano que filtra toxinas y produce bilis.',
      modelUrl: 'Sistemadigestivo/higado.glb',
      exploreUrl: 'detalle/higado.html'
    },
    {
      name: 'Estómago',
      description: 'Órgano que descompone los alimentos.',
      modelUrl: 'Sistemadigestivo/estomago.glb',
      exploreUrl: 'detalle/estomago.html'
    },
    {
      name: 'Boca',
      description: 'Inicio de la digestión; tritura y mezcla alimentos.',
      modelUrl: 'Sistemadigestivo/boca.glb',
      exploreUrl: 'detalle/boca.html'
    },
    {
      name: 'Tiroides',
      description: 'Glándula que regula el metabolismo.',
      modelUrl: 'Sistemaendocrinario/tiroides.glb',
      exploreUrl: 'detalle/tiroides.html'
    },
    {
      name: 'Suprarrenales',
      description: 'Glándulas sobre los riñones.',
      modelUrl: 'Sistemaendocrinario/suprarrenales.glb',
      exploreUrl: 'detalle/suprarrenales.html'
    },
    {
      name: 'Hipófisis',
      description: 'Glándula que controla otras glándulas del cuerpo.',
      modelUrl: 'Sistemaendocrinario/hipofisis.glb',
      exploreUrl: 'detalle/hipofisis.html'
    },
    {
      name: 'Bazo',
      description: 'Órgano que filtra la sangre y combate infecciones.',
      modelUrl: 'Sistemainmunologico/bazo.glb',
      exploreUrl: 'detalle/bazo.html'
    },
    {
      name: 'Linfático',
      description: 'Sistema que transporta linfa y defiende el cuerpo.',
      modelUrl: 'Sistemainmunologico/linfatico.glb',
      exploreUrl: 'detalle/linfatico.html'
    },
    {
      name: 'Sistema nervioso',
      description: 'Red que transmite señales para controlar el cuerpo.',
      modelUrl: 'Sistemanervioso/sistema_nervioso.glb',
      exploreUrl: 'detalle/sistema_nervioso.html'
    },
    {
      name: 'Neurona',
      description: 'Célula que transmite señales.',
      modelUrl: 'Sistemanervioso/neurona.glb',
      exploreUrl: 'detalle/neurona.html'
    },
    {
      name: 'Médula espinal',
      description: 'Transmite señales entre cerebro y cuerpo.',
      modelUrl: 'Sistemanervioso/medula_espinal.glb',
      exploreUrl: 'detalle/medula_espinal.html'
    },
    {
      name: 'Cerebro',
      description: 'Controla funciones del cuerpo, pensamiento y emociones.',
      modelUrl: 'Sistemanervioso/cerebro.glb',
      exploreUrl: 'detalle/cerebro.html'
    }
  ];

  const modelsData = [];
  for (let i = 0; i < 48; i++) {
    const m = baseModels[i % baseModels.length];
    modelsData.push(m);
  }

  modelsData.forEach(model => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = cardTpl(model).trim();
    grid.appendChild(wrapper.firstElementChild);
  });
});
