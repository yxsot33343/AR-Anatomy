
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
  
    // Modelos base (puedes repetir, aquí hay 6 ejemplos)
    const baseModels = [
      {
        
          name: 'Sistema muscular',
          description: 'Sistema muscular humano',
          modelUrl: 'Sistemamuscular/Sistema muscular.glb',
          exploreUrl: 'detalle/sistema_muscular.html' // si aún no tienes este HTML, crea uno
        
        
      },
      {
        name: 'Musculos lisos',
        description: 'Tejido muscular involuntario de órganos internos.',
        modelUrl: 'Sistemamuscular/smooth_muscle_cell.glb',
        exploreUrl: 'detalle/Musculos lisos.html'
      },
      {
        name: 'Musculo cardíaco',
        description: 'Músculo del corazón, de acción involuntaria.',
        modelUrl: 'Sistemamuscular/Musculos_caríaco.glb',
        exploreUrl: 'detalle/Musculo cardíaco.html'
      },
      {
        name: 'Fascias',
        description: 'Tejido que envuelve músculos y órganos.',
        modelUrl: 'Sistemamuscular/Fascias.glb',
        exploreUrl: 'detalle/Fascias.html'
      },
      {
        name: 'Sistema esqueletico',
        description: 'Soporte y protección del cuerpo.',
        modelUrl: 'Sistemaesqueletico/esqueleto.glb',
        exploreUrl: 'detalle/esqueleto.html'
      },
      {
        name: 'Femur',
        description: 'Hueso largo que sostiene el muslo.',
        modelUrl: 'Sistemaesqueleto/Femur.glb',
        exploreUrl: 'detalle/Femur.html'
      },
      {
        name: 'Cartílago',
        description: 'Tejido flexible que amortigua y da forma.',
        modelUrl: 'Sistemaesqueleto/Cartílago.glb',
        exploreUrl: 'detalle/Cartílago.html'
      },
      {
        name: 'Costillas',
        description: 'Hueso que protege el pecho.',
        modelUrl: 'Sistemaesqueleto/Costillas.glb',
        exploreUrl: 'detalle/Costillas.html'
      },
      {
        name: 'Pelvis y femur',
        description: 'Pelvis y fémur: Sostienen el cuerpo, conectan las piernas y permiten el movimiento.',
        modelUrl: 'Sistemaesqueleto/Pelvis y femur.glb',
        exploreUrl: 'detalle/Costillas.html'
      },
      {
        name: 'Cráneo',
        description: 'Hueso que protege el cerebro.',
        modelUrl: 'Sistemaesqueletico/Cráneo.glb',
        exploreUrl: 'detalle/Cráneo.html'
      },
      {
        name: 'Arteria',
        description: 'Vaso que lleva sangre del corazón al cuerpo.',
        modelUrl: 'Sistemacirculatorio/Arteria.glb',
        exploreUrl: 'detalle/Arteria.html'
      },
      {
        name: 'Capilares',
        description: 'Vasos muy finos que conectan arterias y venas.',
        modelUrl: 'Sistemacirculatorio/Capilares.glb',
        exploreUrl: 'detalle/Capilares.html'
      },
      {
        name: 'Corazón',
        description: 'Órgano que bombea sangre por el cuerpo.',
        modelUrl: 'Sistemacirculatorio/Corazón.glb',
        exploreUrl: 'detalle/Corazón.html'
      },
      {
        name: 'Globulos rojos',
        description: 'Células que transportan oxígeno.',
        modelUrl: 'Sistemacirculatorio/Glóbulos rojos.glb',
        exploreUrl: 'detalle/Glóbulos rojos.html'
      },
      {
        name: 'Vasos sanguíneos',
        description: 'Conductos que transportan sangre.',
        modelUrl: 'Sistemacirculatorio/Vasos sanguíneos.glb',
        exploreUrl: 'detalle/Vasos sanguíneos.html'
      },
      {
        name: 'Venas',
        description: 'Vasos que llevan sangre al corazón.',
        modelUrl: 'Sistemacirculatorio/Venas.glb',
        exploreUrl: 'detalle/Venas.html'
      },
      {
        name: 'Sistema digestivo',
        description: 'Vasos que llevan sangre al corazón.',
        modelUrl: 'Sistemadigestivo/Sistema digestivo.glb',
        exploreUrl: 'detalle/Sistema digestivo.html'
      },
      {
        name: 'Páncreas',
        description: 'Órgano que regula el azúcar y ayuda a la digestión.',
        modelUrl: 'Sistemadigestivo/Páncreas.glb',
        exploreUrl: 'detalle/Páncreas.html'
      },
      {
        name: 'Intestino grueso y delgado',
        description: 'Intestino delgado y grueso: Absorben nutrientes y agua, y forman las heces.',
        modelUrl: 'Sistemadigestivo/Intestino grueso y delgado.glb',
        exploreUrl: 'detalle/Intestino grueso y delgado.html'
      },
      {
        name: 'Hígado',
        description: 'Órgano que filtra toxinas y produce bilis.',
        modelUrl: 'Sistemadigestivo/Hígado.glb',
        exploreUrl: 'detalle/Hígado.html'
      },
      {
        name: 'Estómago',
        description: 'Órgano que descompone los alimentos.',
        modelUrl: 'Sistemadigestivo/Estómago.glb',
        exploreUrl: 'detalle/Estómago.html'
      },
       {
        name: 'Boca',
        description: 'Inicio de la digestión; tritura y mezcla alimentos.',
        modelUrl: 'Sistemadigestivo/Boca.glb',
        exploreUrl: 'detalle/Boca.html'
      },
       {
        name: 'Tiroides',
        description: 'Glándula que regula el metabolismo.',
        modelUrl: 'Sistemaendocrinario/Tiroides.glb',
        exploreUrl: 'detalle/Tiroides.html'
      },
      {
        name: 'Suprarrenales',
        description: 'Glándulas sobre los riñones.',
        modelUrl: 'Sistemaendocrinario/Suprarrenales.glb',
        exploreUrl: 'detalle/Suprarrenales.html'
      },
       {
        name: 'Páncreas',
        description: 'Órgano que regula el azúcar y ayuda a la digestión.',
        modelUrl: 'Sistemaendocrinario/Páncreas.glb',
        exploreUrl: 'detalle/Páncreas.html'
      },
      {
        name: 'Hipófisis',
        description: 'Glándula que controla otras glándulas del cuerpo.',
        modelUrl: 'Sistemaendocrinario/Hipófisis.glb',
        exploreUrl: 'detalle/Hipófisis.html'
      },
      {
        name: 'Bazo',
        description: 'Órgano que filtra la sangre y combate infecciones.',
        modelUrl: 'Sistemainmunologico/Bazo.glb',
        exploreUrl: 'detalle/Bazo.html'
      },
      {
        name: 'Linfático',
        description: 'Sistema que transporta linfa y defiende el cuerpo.',
        modelUrl: 'Sistemanervioso/Linfático.glb',
        exploreUrl: 'detalle/Linfático.html'
      },
      {
        name: 'Sistema nervioso',
        description: 'Red que transmite señales para controlar el cuerpo.',
        modelUrl: 'Sistemanervioso/Sistema nervioso.glb',
        exploreUrl: 'detalle/Sistema nervioso.html'
      },
      {
        name: 'Neurona',
        description: 'Célula que transmite señales en el sistema nervioso.',
        modelUrl: 'Sistemanervioso/Neurona.glb',
        exploreUrl: 'detalle/Neurona.html'
      },
      {
        name: 'Médula espinal',
        description: 'Parte del sistema nervioso que transmite señales entre el cerebro y el cuerpo.',
        modelUrl: 'Sistemanervioso/Medúla espinal.glb',
        exploreUrl: 'detalle/Médula espinal.html'
      },
      {
        name: 'Cerebro',
        description: 'Órgano que controla el pensamiento, emociones y funciones del cuerpo.',
        modelUrl: 'Sistemanervioso/Cerebro.glb',
        exploreUrl: 'detalle/Cerebro.html'
      },
     
    ];
  
    // Generar 48 entradas reusando el array base
    const modelsData = [];
    for (let i = 0; i < 48; i++) {
      const m = baseModels[i % baseModels.length];
      // opcionalmente podrías clonar y añadir un sufijo al nombre: `${m.name}_${i+1}`
      modelsData.push(m);
    }
  
    // Insertar todas las cards en el DOM
    modelsData.forEach(model => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = cardTpl(model).trim();
      grid.appendChild(wrapper.firstElementChild);
    });
  });

