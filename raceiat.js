define(['pipAPI','./iat10_ru.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
                name : 'Башкиры',
                title : {
                    media : { word : 'Башкиры' },
                    css   : { color:'#31940F','font-size':'1.8em' },
                    height: 4
                },
                stimulusMedia : [
                    { word: 'Сабантуй' },
                    { word: 'Бешбармак' },
                    { word: 'Урал-Батыр' },
                    { word: 'Агидель' },
                    { word: 'Бешмет' },
                    { word: 'Курай' }
                ],
                stimulusCss : { color:'#31940F','font-size':'2.3em' }
            },

            // Таргет 2: Русский
            category2 : {
                name : 'Русские',
                title : {
                    media : { word : 'Русские' },
                    css   : { color:'#31940F','font-size':'1.8em' },
                    height: 4
                },
                stimulusMedia : [
                    { word: 'Масленица' },
                    { word: 'Пельмени' },
                    { word: 'Илья Муромец' },
                    { word: 'Волга' },
                    { word: 'Кокошник' },
                    { word: 'Балалайка' }
                ],
                stimulusCss : { color:'#31940F','font-size':'2.3em' }
            },

            // ───────── АТРИБУТЫ: ГОРЫ / БОЛОТА (КАРТИНКИ) ─────────

            attribute1 : { // ГОРЫ
                name : 'Горы',
                title : {
                    media : { word : 'Горы' },
                    css   : { color:'#0000FF','font-size':'1.8em' },
                    height: 4
                },
                stimulusMedia : [
                    { image: 'mount_1.jpg' },
                    { image: 'mount_2.jpg' },
                    { image: 'mount_3.jpg' },
                    { image: 'mount_4.jpg' },
                    { image: 'mount_5.jpg' },
                    { image: 'mount_6.jpg' },
                    { image: 'mount_7.jpg' },
                    { image: 'mount_8.jpg' }
                ],
                // CSS тут влияет в основном на размер рамки / подписи,
                // сами картинки по размеру задаются их файлами.
                stimulusCss : { color:'#0000FF','font-size':'2.3em' }
            },

            attribute2 : { // БОЛОТА
                name : 'Болота',
                title : {
                    media : { word : 'Болота' },
                    css   : { color:'#0000FF','font-size':'1.8em' },
                    height: 4
                },
                stimulusMedia : [
                    { image: 'swamp_1.jpg' },
                    { image: 'swamp_2.jpg' },
                    { image: 'swamp_3.jpg' },
                    { image: 'swamp_4.jpg' },
                    { image: 'swamp_5.jpg' },
                    { image: 'swamp_6.jpg' },
                    { image: 'swamp_7.jpg' },
                    { image: 'swamp_8.jpg' }
                ],
                stimulusCss : { color:'#0000FF','font-size':'2.3em' }
            },
        
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
    });
});

