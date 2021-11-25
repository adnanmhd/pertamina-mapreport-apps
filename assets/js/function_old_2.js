$(document).ready(function() {


    $('#upload-new').click(function() {
        location.reload();
    });

    var rayon = [];


    $('#navbar').hide();
    $('#footer').hide();


    var base_url = $("#base_url").val();

    $('#input-excel').change(function(e) {




        var reader = new FileReader();
        reader.readAsArrayBuffer(e.target.files[0]);

        reader.onload = function(e) {
            var data = new Uint8Array(reader.result);
            var wb = XLSX.read(data, {
                type: 'array'
            });

            var data_excel = XLSX.utils.sheet_to_json(wb['Sheets']['Sheet1']);

            console.log("data exc: " + data_excel.length);

            console.log(data_excel);

            if (data_excel.length > 0 && typeof data_excel[0]['Coordinate'] !== "undefined") {
                get_map(data_excel);
            } else {
                alert("Tidak dapat memuat map. Titik koordinat tidak ditemukan.");
            }

        }




    });

    // get_map();


    function get_map(data_map) {

        var all_rayon = [];

        var class_indicator = "";

        $('#front-page').hide();
        $('#map-page').show();
        $('#navbar').show();
        $('#footer').show();

        var map = L.map('mapid').setView([-7.8198, 112.4205593], 8);


        var icon_red = L.icon({
            iconUrl: base_url + 'assets/images/marker-red.png',
            iconSize: [38, 38],
            iconAnchor: [15, 35],
            popupAnchor: [4, -28],
            shadowUrl: base_url + 'assets/images/marker-shadow.png',
            // shadowSize: [68, 65],
            shadowAnchor: [10, 42]
        });




        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {
            foo: 'bar'
        }).addTo(map);

        for (var i = 0; i < data_map.length; i++) {

            if (typeof data_map[i]['Coordinate'] !== "undefined") {

                all_rayon.push(data_map[i]['Rayon']);
            }
        }

        
        $.each(all_rayon, function(i, el) {
            if ($.inArray(el, rayon) === -1) rayon.push(el);
        });

        var rayon_copy = [rayon.length];
        // rayon_copy = new Array();

        console.log("rayon 1 : "+ rayon);
        console.log("rayon 2 : "+ rayon_copy);

        for (var i = 0; i < rayon.length; i++) {
            rayon_copy[i] = new Array();
        }

        console.log("rayon 2 : "+ JSON.stringify(rayon_copy));

        var data_all_rayon = new Object();

        for (var i = 0; i < data_map.length; i++) {

            if (typeof data_map[i]['Coordinate'] !== "undefined") {

                if (data_map[i]['Cov. Days (Hari)'] > 2) {
                    class_indicator = "text-success";
                } else if (data_map[i]['Cov. Days (Hari)'] >= 1 && parseInt(data_map[i]['Cov. Days (Hari)']) < 2) {
                    class_indicator = "text-danger";
                } else if (data_map[i]['Cov. Days (Hari)'] < 1) {
                    class_indicator = "text-primary";
                }

                var coordinate = data_map[i]['Coordinate'].split(',');

                var cari_rayon = data_map[i]['Rayon'];

                console.log("cari rayon : " + cari_rayon);

                var index_rayon = rayon.indexOf(data_map[i]['Rayon'], 0);
                console.log("index_rayon: " + index_rayon);

                if (index_rayon !== -1) {

                    rayon_copy[index_rayon].push(
                    
                    L.marker([coordinate[0], coordinate[1]], {
                        icon: icon_red
                    }).bindPopup(
                        "<b>" + data_map[i]['Nama SP(P)BE'] + "</b><br>" +
                        data_map[i]['Kota'] + " | " + data_map[i]['Rayon'] +
                        "<ul class=\"list-group\"><li class=\"list-group-item\">Stock: " + data_map[i]['Stock'] + "</li>" +
                        "<li class=\"list-group-item\">DOT(MT): " + data_map[i]['DOT(MT)'] + "</li>" +
                        "<li class=\"list-group-item " + class_indicator + "\">Cov. Days : " + data_map[i]['Cov. Days (Hari)'] + "</li>" +
                        "</ul>"
                    )
                );
                }

                

            }
        }

        // var rayon_se_1 = L.layerGroup(rayon1),
        //     rayon_se_2 = L.layerGroup(rayon2),
        //     rayon_se_3 = L.layerGroup(rayon3),
        //     rayon_se_4 = L.layerGroup(rayon4),
        //     rayon_se_5 = L.layerGroup(rayon5),
        //     rayon_se_6 = L.layerGroup(rayon6),
        //     rayon_se_7 = L.layerGroup(rayon7),
        //     rayon_se_8 = L.layerGroup(rayon8),
        //     rayon_se_9 = L.layerGroup(rayon9);

        // var overlayMaps = new Object();
        // for (var i = 0; i < rayon.length; i++) {
        //         overlayMaps.push(
        //             rayon[i]
        //             )
        //     };

        // var overlayMaps = {

            
        //     "SE I": rayon_se_1,
        //     "SE II": rayon_se_2,
        //     "SE III": rayon_se_3,
        //     "SE IV": rayon_se_4,
        //     "SE V": rayon_se_5,
        //     "SE VI": rayon_se_6,
        //     "SE VII": rayon_se_7,
        //     "SE VIII": rayon_se_8,
        //     "SE IX": rayon_se_9
        // }





        console.log('all rayon: ' + JSON.stringify(all_rayon));

        console.log('rayon: ' + JSON.stringify(rayon));

        console.log('rayon 0 1: ' + JSON.stringify(rayon_copy[0][1]));

        console.log('all data rayon: ' + data_all_rayon.length);

        // console.log('overlayMaps: ' + JSON.stringify(overlayMaps));

    }

});