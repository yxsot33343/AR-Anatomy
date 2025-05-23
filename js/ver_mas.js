document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.models-grid');

  // Plantilla de cada tarjeta
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

  // Lista de modelos base (sin duplicaciones ni errores de ruta)
  const baseModels = [
    {
      name: 'Sistema muscular',
      description: 'Sistema muscular humano',
      modelUrl: 'Sistemamuscular/sistema_muscular.glb',
      exploreUrl: 'detalle/sistema_muscular.html'
    },
    {
      name: 'Músculos lisos',
      description: 'Tejido muscular involuntario de órganos internos.',
      modelUrl: 'Sistemamuscular/smooth_muscle_cell.glb',
      exploreUrl: 'detalle/musculos_lisos.html'
    },
    {
      name: 'Músculo cardíaco',
      description: 'Músculo del corazón, de acción involuntaria.',
      modelUrl: 'Sistemamuscular/musculo_cardiaco.glb',
      exploreUrl: 'detalle/musculo_cardiaco.html'
    },
    {
      name: 'Fascias',
      description: 'Tejido que envuelve músculos y órganos.',
      modelUrl: 'Sistemamuscular/fascias.glb',
      exploreUrl: 'detalle/fascias.html'
    },
    {
      name: 'Sistema esquelético',
      description: 'Soporte y protección del cuerpo.',
      modelUrl: 'Sistemaesqueletico/esqueleto.glb',
      exploreUrl: 'detalle/esqueleto.html'
    },
    {
      name: 'Fémur',
      description: 'Hueso largo que sostiene el muslo.',
      modelUrl: 'Sistemaesqueletico/femur.glb',
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
      description: 'Hueso que protege el pecho.',
      modelUrl: 'Sistemaesqueletico/costillas.glb',
      exploreUrl: 'detalle/costillas.html'
    },
    {
      name: 'Pelvis y fémur',
      description: 'Pelvis y fémur: sostienen el cuerpo y permiten el movimiento.',
      modelUrl: 'Sistemaesqueletico/pelvis_femur.glb',
      exploreUrl: 'detalle/pelvis_femur.html'
    },
    {
      name: 'Cráneo',
      description: 'Hueso que protege el cerebro.',
      modelUrl: 'Sistemaesqueletico/craneo.glb',
      exploreUrl: 'detalle/craneo.html'
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
      modelUrl: 'Sistemacirculatorio/capilares.glb',
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
      description: 'Transforma alimentos en energía.',
      modelUrl: 'Sistemadigestivo/sistema_digestivo.glb',
      exploreUrl: 'detalle/sistema_digestivo.html'
    },
    {
      name: 'Páncreas',
      description: 'Regula el azúcar y ayuda a la digestión.',
      modelUrl: 'Sistemadigestivo/pancreas.glb',
      exploreUrl: 'detalle/pancreas.html'
    },
    {
      name: 'Intestino grueso y delgado',
      description: 'Absorben nutrientes y forman heces.',
      modelUrl: 'Sistemadigestivo/intestinos.glb',
      exploreUrl: 'detalle/intestinos.html'
    },
    {
      name: 'Hígado',
      description: 'Filtra toxinas y produce bilis.',
      modelUrl: 'Sistemadigestivo/higado.glb',
      exploreUrl: 'detalle/higado.html'
    },
    {
      name: 'Estómago',
      description: 'Descompone los alimentos.',
      modelUrl: 'Sistemadigestivo/estomago.glb',
      exploreUrl: 'detalle/estomago.html'
    },
    {
      name: 'Boca',
      description: 'Inicio de la digestión.',
      modelUrl: 'Sistemadigestivo/boca.glb',
      exploreUrl: 'detalle/boca.html'
    },
    {
      name: 'Tiroides',
      description: 'Regula el metabolismo.',
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
      description: 'Controla otras glándulas del cuerpo.',
      modelUrl: 'Sistemaendocrinario/hipofisis.glb',
      exploreUrl: 'detalle/hipofisis.html'
    },
    {
      name: 'Bazo',
      description: 'Filtra sangre y combate infecciones.',
      modelUrl: 'Sistemainmunologico/bazo.glb',
      exploreUrl: 'detalle/bazo.html'
    },
    {
      name: 'Sistema linfático',
      description: 'Transporta linfa y defiende el cuerpo.',
      modelUrl: 'Sistemainmunologico/linfatico.glb',
      exploreUrl: 'detalle/linfatico.html'
    },
    {
      name: 'Sistema nervioso',
      description: 'Controla funciones y respuestas del cuerpo.',
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
      description: 'Transmite señales entre el cuerpo y el cerebro.',
      modelUrl: 'Sistemanervioso/medula_espinal.glb',
      exploreUrl: 'detalle/medula_espinal.html'
    },
    {
      name: 'Cerebro',
      description: 'Controla pensamiento y funciones corporales.',
      modelUrl: 'Sistemanervioso/cerebro.glb',
      exploreUrl: 'detalle/cerebro.html'
    }
  ];

  // Rellenar hasta 48 tarjetas
  const modelsData = [];
  for (let i = 0; i < 48; i++) {
    const m = baseModels[i % baseModels.length];
    modelsData.push(m);
  }

  // Insertar todas las tarjetas en el DOM
  modelsData.forEach(model => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = cardTpl(model).trim();
    grid.appendChild(wrapper.firstElementChild);
  });
});
