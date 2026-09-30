var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Poso_2 = new ol.format.GeoJSON();
var features_Poso_2 = format_Poso_2.readFeatures(json_Poso_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poso_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poso_2.addFeatures(features_Poso_2);
var lyr_Poso_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poso_2, 
                style: style_Poso_2,
                popuplayertitle: 'Poso',
                interactive: false,
                title: '<img src="styles/legend/Poso_2.png" /> Poso'
            });
var format_Lokasi_3 = new ol.format.GeoJSON();
var features_Lokasi_3 = format_Lokasi_3.readFeatures(json_Lokasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokasi_3.addFeatures(features_Lokasi_3);
var lyr_Lokasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokasi_3, 
                style: style_Lokasi_3,
                popuplayertitle: 'Lokasi',
                interactive: false,
    title: 'Lokasi<br />\
    <img src="styles/legend/Lokasi_3_0.png" /> Pamona Barat<br />\
    <img src="styles/legend/Lokasi_3_1.png" /> Pamona Selatan<br />\
    <img src="styles/legend/Lokasi_3_2.png" /> Pamona Tenggara<br />\
    <img src="styles/legend/Lokasi_3_3.png" /> Pamona Timur<br />' });
var format_Batas_Administrasi_4 = new ol.format.GeoJSON();
var features_Batas_Administrasi_4 = format_Batas_Administrasi_4.readFeatures(json_Batas_Administrasi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_4.addFeatures(features_Batas_Administrasi_4);
var lyr_Batas_Administrasi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_4, 
                style: style_Batas_Administrasi_4,
                popuplayertitle: 'Batas_Administrasi',
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_4.png" /> Batas_Administrasi'
            });
var format_waterways_pamona_5 = new ol.format.GeoJSON();
var features_waterways_pamona_5 = format_waterways_pamona_5.readFeatures(json_waterways_pamona_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterways_pamona_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterways_pamona_5.addFeatures(features_waterways_pamona_5);
var lyr_waterways_pamona_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterways_pamona_5, 
                style: style_waterways_pamona_5,
                popuplayertitle: 'waterways_pamona',
                interactive: false,
                title: '<img src="styles/legend/waterways_pamona_5.png" /> waterways_pamona'
            });
var format_Jalan_Pamona_6 = new ol.format.GeoJSON();
var features_Jalan_Pamona_6 = format_Jalan_Pamona_6.readFeatures(json_Jalan_Pamona_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Pamona_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Pamona_6.addFeatures(features_Jalan_Pamona_6);
var lyr_Jalan_Pamona_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Pamona_6, 
                style: style_Jalan_Pamona_6,
                popuplayertitle: 'Jalan_Pamona',
                interactive: false,
                title: '<img src="styles/legend/Jalan_Pamona_6.png" /> Jalan_Pamona'
            });
var format_osm_water_7 = new ol.format.GeoJSON();
var features_osm_water_7 = format_osm_water_7.readFeatures(json_osm_water_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_osm_water_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_osm_water_7.addFeatures(features_osm_water_7);
var lyr_osm_water_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_osm_water_7, 
                style: style_osm_water_7,
                popuplayertitle: 'osm_water',
                interactive: true,
                title: '<img src="styles/legend/osm_water_7.png" /> osm_water'
            });
var format_Permukiman_8 = new ol.format.GeoJSON();
var features_Permukiman_8 = format_Permukiman_8.readFeatures(json_Permukiman_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permukiman_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permukiman_8.addFeatures(features_Permukiman_8);
var lyr_Permukiman_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Permukiman_8, 
                style: style_Permukiman_8,
                popuplayertitle: 'Permukiman',
                interactive: false,
                title: '<img src="styles/legend/Permukiman_8.png" /> Permukiman'
            });
var format_Air_Baku_Update_9 = new ol.format.GeoJSON();
var features_Air_Baku_Update_9 = format_Air_Baku_Update_9.readFeatures(json_Air_Baku_Update_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Air_Baku_Update_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Air_Baku_Update_9.addFeatures(features_Air_Baku_Update_9);
var lyr_Air_Baku_Update_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Air_Baku_Update_9, 
                style: style_Air_Baku_Update_9,
                popuplayertitle: 'Air_Baku_Update',
                interactive: true,
    title: 'Air_Baku_Update<br />\
    <img src="styles/legend/Air_Baku_Update_9_0.png" /> Air Tanah / Sumur<br />\
    <img src="styles/legend/Air_Baku_Update_9_1.png" /> Mata Air<br />\
    <img src="styles/legend/Air_Baku_Update_9_2.png" /> Sungai<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Poso_2.setVisible(true);lyr_Lokasi_3.setVisible(true);lyr_Batas_Administrasi_4.setVisible(true);lyr_waterways_pamona_5.setVisible(true);lyr_Jalan_Pamona_6.setVisible(true);lyr_osm_water_7.setVisible(true);lyr_Permukiman_8.setVisible(true);lyr_Air_Baku_Update_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Poso_2,lyr_Lokasi_3,lyr_Batas_Administrasi_4,lyr_waterways_pamona_5,lyr_Jalan_Pamona_6,lyr_osm_water_7,lyr_Permukiman_8,lyr_Air_Baku_Update_9];
lyr_Poso_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', 'SUMBER': 'SUMBER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AF_CONF': 'AF_CONF', 'Keterangan': 'Keterangan', 'Luas': 'Luas', });
lyr_Lokasi_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_Batas_Administrasi_4.set('fieldAliases', {'objectid': 'objectid', 'no_prop': 'no_prop', 'no_kab': 'no_kab', 'no_kec': 'no_kec', 'no_kel': 'no_kel', 'nama_prop': 'nama_prop', 'nama_kab': 'nama_kab', 'nama_kec': 'nama_kec', 'nama_kel': 'nama_kel', 'jangkauan': 'jangkauan', 'pulau': 'pulau', 'kode_desa_': 'kode_desa_', 'jumlah_pen': 'jumlah_pen', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_waterways_pamona_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_Jalan_Pamona_6.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_osm_water_7.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Permukiman_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Air_Baku_Update_9.set('fieldAliases', {'Id': 'Id', 'NamaLokasi': 'Nama Lokasi / Titik Survei', 'Kode': 'Kode Lokasi', 'JSmbr_ABku': 'Jenis Sumber Air Baku', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Elevasi': 'Elevasi (mdpl)', 'Lebar_m': 'Lebar Sumber Air (meter)', 'Kedlaman_m': 'Kedalaman Sumber Air (meter)', 'Debt_L_dtk': 'Debit / Laju Alir (liter/detik)', 'Warna_Air': 'Warna Air', 'Bau_Air': 'Bau Air', 'Knds_Vgtsi': 'Kondisi Vegetasi Sekitar', 'Smbr_Pncmr': 'Sumber Pencemar di Sekitar', 'Aksesiblts': 'Aksesibilitas Lokasi', 'Status': 'Status Pemanfaatan', 'Potensi': 'Potensi Pengembangan', 'Surveyor': 'Surveyor', 'Catatan': 'Catatan Lapangan', 'Sampel_Lab': 'Sampel Air Diambil untuk Lab?', 'NO_S_Lab': 'Nomor Sampel Laboratorium', 'Foto_Loks': 'Foto Lokasi', 'Video': 'Video Lokasi', 'Deskripsi': 'Deskripsi Aksesbilitas Lokasi', 'Keterangan': 'Keterangan', });
lyr_Poso_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AF_CONF': 'TextEdit', 'Keterangan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Lokasi_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_Batas_Administrasi_4.set('fieldImages', {'objectid': 'TextEdit', 'no_prop': 'TextEdit', 'no_kab': 'TextEdit', 'no_kec': 'TextEdit', 'no_kel': 'TextEdit', 'nama_prop': 'TextEdit', 'nama_kab': 'TextEdit', 'nama_kec': 'TextEdit', 'nama_kel': 'TextEdit', 'jangkauan': 'TextEdit', 'pulau': 'TextEdit', 'kode_desa_': 'TextEdit', 'jumlah_pen': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_waterways_pamona_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_Jalan_Pamona_6.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_osm_water_7.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Permukiman_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Air_Baku_Update_9.set('fieldImages', {'Id': 'Range', 'NamaLokasi': 'TextEdit', 'Kode': 'TextEdit', 'JSmbr_ABku': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'Elevasi': 'TextEdit', 'Lebar_m': 'TextEdit', 'Kedlaman_m': 'TextEdit', 'Debt_L_dtk': 'TextEdit', 'Warna_Air': 'TextEdit', 'Bau_Air': 'TextEdit', 'Knds_Vgtsi': 'TextEdit', 'Smbr_Pncmr': 'TextEdit', 'Aksesiblts': 'TextEdit', 'Status': 'TextEdit', 'Potensi': 'TextEdit', 'Surveyor': 'TextEdit', 'Catatan': 'TextEdit', 'Sampel_Lab': 'TextEdit', 'NO_S_Lab': 'TextEdit', 'Foto_Loks': 'ExternalResource', 'Video': 'TextEdit', 'Deskripsi': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Poso_2.set('fieldLabels', {'OBJECTID': 'no label', 'KABUPATEN': 'no label', 'PROVINSI': 'no label', 'SUMBER': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AF_CONF': 'no label', 'Keterangan': 'no label', 'Luas': 'no label', });
lyr_Lokasi_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'no label', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'LUAS': 'hidden field', });
lyr_Batas_Administrasi_4.set('fieldLabels', {'objectid': 'hidden field', 'no_prop': 'hidden field', 'no_kab': 'hidden field', 'no_kec': 'hidden field', 'no_kel': 'hidden field', 'nama_prop': 'hidden field', 'nama_kab': 'hidden field', 'nama_kec': 'hidden field', 'nama_kel': 'no label', 'jangkauan': 'hidden field', 'pulau': 'hidden field', 'kode_desa_': 'hidden field', 'jumlah_pen': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_waterways_pamona_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_Jalan_Pamona_6.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_osm_water_7.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'no label', });
lyr_Permukiman_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Air_Baku_Update_9.set('fieldLabels', {'Id': 'hidden field', 'NamaLokasi': 'hidden field', 'Kode': 'no label', 'JSmbr_ABku': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Desa': 'inline label - always visible', 'Elevasi': 'hidden field', 'Lebar_m': 'hidden field', 'Kedlaman_m': 'hidden field', 'Debt_L_dtk': 'inline label - always visible', 'Warna_Air': 'inline label - always visible', 'Bau_Air': 'inline label - always visible', 'Knds_Vgtsi': 'hidden field', 'Smbr_Pncmr': 'inline label - always visible', 'Aksesiblts': 'inline label - always visible', 'Status': 'inline label - always visible', 'Potensi': 'hidden field', 'Surveyor': 'hidden field', 'Catatan': 'hidden field', 'Sampel_Lab': 'hidden field', 'NO_S_Lab': 'hidden field', 'Foto_Loks': 'inline label - always visible', 'Video': 'inline label - always visible', 'Deskripsi': 'hidden field', 'Keterangan': 'no label', });
lyr_Air_Baku_Update_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});