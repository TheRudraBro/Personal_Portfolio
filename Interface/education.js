 lucide.createIcons();

    const defaultConfig = {
      section_title: 'Education & Experience',
      primary_color: '#d4ff3a',
      bg_color: '#0a0a0a',
      surface_color: '#161616',
      text_color: '#ededed',
      muted_color: '#6b6b6b',
      font_family: 'Fraunces',
      font_size: 16
    };

    window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => {
        const c = { ...defaultConfig, ...config };
        
        document.getElementById('section-title').innerHTML = 
          `<span style="color: ${c.primary_color}">Education</span> & Experience`;
        
        document.getElementById('app').style.setProperty('--accent', c.primary_color);
        document.getElementById('app').style.setProperty('--bg', c.bg_color);
        document.getElementById('app').style.setProperty('--surface', c.surface_color);
        document.getElementById('app').style.setProperty('--text', c.text_color);
        document.getElementById('app').style.setProperty('--muted', c.muted_color);

        document.querySelectorAll('.timeline-dot').forEach(el => { 
          el.style.backgroundColor = c.primary_color; 
        });
        
        document.querySelectorAll('.timeline-line').forEach(el => { 
          el.style.borderImageSource = `linear-gradient(to bottom, ${c.primary_color}, transparent)`;
        });
      },
      mapToCapabilities: (config) => {
        const c = { ...defaultConfig, ...config };
        return {
          recolorables: [
            { get: () => c.bg_color, set: v => { c.bg_color = v; window.elementSdk.setConfig({ bg_color: v }); }},
            { get: () => c.surface_color, set: v => { c.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }},
            { get: () => c.text_color, set: v => { c.text_color = v; window.elementSdk.setConfig({ text_color: v }); }},
            { get: () => c.primary_color, set: v => { c.primary_color = v; window.elementSdk.setConfig({ primary_color: v }); }},
            { get: () => c.muted_color, set: v => { c.muted_color = v; window.elementSdk.setConfig({ muted_color: v }); }}
          ],
          borderables: [],
          fontEditable: { get: () => c.font_family, set: v => { c.font_family = v; window.elementSdk.setConfig({ font_family: v }); }},
          fontSizeable: { get: () => c.font_size, set: v => { c.font_size = v; window.elementSdk.setConfig({ font_size: v }); }}
        };
      },
      mapToEditPanelValues: (config) => {
        const c = { ...defaultConfig, ...config };
        return new Map([
          ['section_title', c.section_title]
        ]);
      }
    });