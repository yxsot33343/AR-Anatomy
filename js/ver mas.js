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
      name: '16_eye',
      description: 'Ojo en desarrollo',
      modelUrl: 'modelos ar/16_eye.fbx',
      exploreUrl: 'detalle/16_eye.html'
    },
    {
      name: '16_week_fetal_heart',
      description: 'Corazón fetal 16 semanas',
      modelUrl: 'modelos ar/16_week_fetal_heart.glb',
      exploreUrl: 'detalle/16_week_fetal_heart.html'
    },
    {
      name: 'ecorche',
      description: 'Ecórche anatómico',
      modelUrl: 'modelos ar/ecorche_-_anatomy_stl.glb',
      exploreUrl: 'detalle/ecorche.html'
    },
    {
      name: 'nervous_system',
      description: 'Sistema nervioso',
      modelUrl: 'modelos ar/nervous_system.glb',
      exploreUrl: 'detalle/nervous_system.html'
    },
    {
      name: 'skeleton',
      description: 'Esqueleto humano',
      modelUrl: 'modelos ar/skeleton.obj',
      exploreUrl: 'detalle/skeleton.html'
    },
    {
      name: 'stylizeddigestivesystem',
      description: 'Sistema digestivo estilizado',
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
