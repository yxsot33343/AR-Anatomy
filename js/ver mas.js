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
        modelUrl: 'Sistemamuscular/Musculo_cardíaco.glb',
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
        description: 'Esqueleto humano',
        modelUrl: 'Sistema esqueletico/Pelvis y femur.glb',
        exploreUrl: 'detalle/skeleton.html'
      },
      {
        name: 'Femur',
        description: 'Hueso largo que sostiene el muslo.',
        modelUrl: 'modelos ar/stylizeddigestivesystem.glb',
        exploreUrl: 'detalle/digestive.html'
      }
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
