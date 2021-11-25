$(document).ready(function() {


    $('#upload-new').click(function(){
        location.reload();
    });


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
        var rayon1 = [],
            rayon2 = [],
            rayon3 = [],
            rayon4 = [],
            rayon5 = [],
            rayon6 = [],
            rayon7 = [],
            rayon8 = [],
            rayon9 = [];

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

                if (data_map[i]['Cov. Days (Hari)'] > 2) {
                    class_indicator = "text-success";
                } else if (data_map[i]['Cov. Days (Hari)'] >= 1 && parseInt(data_map[i]['Cov. Days (Hari)']) < 2) {
                    class_indicator = "text-danger";
                } else if (data_map[i]['Cov. Days (Hari)'] < 1) {
                    class_indicator = "text-primary";
                }

                var coordinate = data_map[i]['Coordinate'].split(',');

                if (data_map[i]['Rayon'] == "SE I") {
                    rayon1.push(

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
                } else if (data_map[i]['Rayon'] == "SE II") {
                    rayon2.push(

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
                } else if (data_map[i]['Rayon'] == "SE III") {
                    rayon3.push(

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
                } else if (data_map[i]['Rayon'] == "SE IV") {
                    rayon4.push(

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
                } else if (data_map[i]['Rayon'] == "SE V") {
                    rayon5.push(

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
                } else if (data_map[i]['Rayon'] == "SE VI") {
                    rayon6.push(

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
                } else if (data_map[i]['Rayon'] == "SE VII") {
                    rayon7.push(

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
                } else if (data_map[i]['Rayon'] == "SE VIII") {
                    rayon8.push(

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
                } else if (data_map[i]['Rayon'] == "SE IX") {
                    rayon9.push(

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



                // L.marker([coordinate[0], coordinate[1]], {
                //     icon: icon_red
                // }).addTo(map).bindPopup(
                //     "<b>" + data_map[i]['Nama SP(P)BE'] + "</b><br>" +
                //     data_map[i]['Kota'] + " | " + data_map[i]['Rayon']
                // );

            }
        }       

        var rayon_se_1 = L.layerGroup(rayon1),
            rayon_se_2 = L.layerGroup(rayon2),
            rayon_se_3 = L.layerGroup(rayon3),
            rayon_se_4 = L.layerGroup(rayon4),
            rayon_se_5 = L.layerGroup(rayon5),
            rayon_se_6 = L.layerGroup(rayon6),
            rayon_se_7 = L.layerGroup(rayon7),
            rayon_se_8 = L.layerGroup(rayon8),
            rayon_se_9 = L.layerGroup(rayon9);

        var overlayMaps = {
            "SE I": rayon_se_1,
            "SE II": rayon_se_2,
            "SE III": rayon_se_3,
            "SE IV": rayon_se_4,
            "SE V": rayon_se_5,
            "SE VI": rayon_se_6,
            "SE VII": rayon_se_7,
            "SE VIII": rayon_se_8,
            "SE IX": rayon_se_9
        };



        L.control.layers('', overlayMaps, {
            collapsed: false
        }).addTo(map);


        // var polyline_se1 = L.polyline([
        //     [-7.3982954,112.4438863],
        //     [-7.8227828,113.2247173],
        //     [-7.2129658,113.455081],
        //     [-7.1958314,112.6279196],
        //     [-7.225823,112.5579713],
        //     [-7.3982954,112.4438863]
        //     ]
        //     ).addTo(map);

        // var polyline_se2 = L.polyline([
        //     [-7.5447919,112.6289667],
        //     [-7.6674691,112.2687694],
        //     [-7.592731,112.1251973],
        //     [-7.3982954,112.3],
        //     [-7.5447919,112.6289667]           
        //     ]
        //     ).addTo(map);




    }









});