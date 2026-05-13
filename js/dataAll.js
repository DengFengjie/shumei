// 初始化所有图表
function initAllCharts() {
  try {
    // 3D地球初始化
    const init3DGlobe = () => {
      if (!echarts.gl) {
        console.error('[ECharts GL] 3D组件加载失败');
        document.getElementById('globe3D').innerHTML = '<p style="color:white;padding:20px">3D模型加载失败，请检查浏览器控制台</p>';
        return;
      }

      const globeChart = echarts.init(document.getElementById('globe3D'), {
        renderer: 'canvas',
        devicePixelRatio: Math.min(window.devicePixelRatio, 1.5)
      });

      let currentTexture = './images/月球表面彩色山体阴影.jpg';
      
      const globeOption = {
        globe: {
          baseTexture: currentTexture,
          shading: 'realistic',
          environment: 'images/starfield.jpg',
          realisticMaterial: { roughness: 0.8, metalness: 0.2 },
          viewControl: { 
            autoRotate: true,
            autoRotateSpeed: 10
          }
        }
      };
      
      globeChart.setOption(globeOption);

      // 纹理切换事件
      document.getElementById('texture').addEventListener('change', (e) => {
        currentTexture = e.target.value;
        globeChart.setOption({ globe: { baseTexture: currentTexture } });
      });
    };

    // 初始化其他图表 (保留原有业务逻辑)
    const initOtherCharts = () => {
      // 横向条形图
      var rankChart = echarts.init(document.getElementById('rank'));
      rankChart.setOption({/* 原有配置 */});

      // 饼图
      var foilChart = echarts.init(document.getElementById('foil'));
      foilChart.setOption({/* 原有配置 */});

      // 旭日图
      var containerChart = echarts.init(document.getElementById('container'));
      containerChart.setOption({/* 原有配置 */});

      // 滚动文字初始化
      var initScroll = function () {
        var parent = document.getElementById("parent");
        var scrollone = document.getElementById("scroll-one");
        setInterval(function () {
          parent.scrollTop > scrollone.offsetHeight ? parent.scrollTop = 0 : parent.scrollTop++;
        }, 100);
      };
      initScroll();
    };

    // 执行初始化流程
    init3DGlobe();
    initOtherCharts();

  } catch (error) {
    console.error('图表初始化失败:', error);
  }
}

// 页面加载后执行
window.addEventListener('load', initAllCharts);
