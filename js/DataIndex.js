window.onload = function () {
    // 初始化3D月球可视化
    const globe3D = echarts.init(document.querySelector("#globe3D "));
    
    // 设置3D月球贴图的函数
    function setGlobeTexture(texturePath) {
        const globeOpt = {
            backgroundColor: '#000', // 背景颜色
            globe: {
                baseTexture: texturePath, // 动态纹理路径
                environment: './images/blacksky.jpg', // 背景环境
                displacementScale: 0.04,
                shading: 'realistic',
                realisticMaterial: {
                    roughness: 0.9
                },
                postEffect: {
                    enable: true
                },
                light: {
                    main: {
                        intensity: 0,
                        shadow: true
                    },
                    ambient: {
                        intensity: 1
                    }
                }
            }
        };
        // 将配置应用到3D地球
        globe3D.setOption(globeOpt);
    }
    
    // 设置初始贴图
    setGlobeTexture('./images/月球表面彩色山体阴影.jpg');
    
    // 监听用户切换贴图的操作
    document.getElementById('texture').addEventListener('change', function () {
        const selectedTexture = this.value;
        setGlobeTexture(selectedTexture);
    });

    // 当窗口大小变化时调整3D地球的大小
    window.addEventListener("resize", function () {
        globe3D.resize();
    });

};