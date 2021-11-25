<!DOCTYPE html>
<html>
	<head>
		<title></title>
		
		<!-- <link href='https://api.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.css' rel='stylesheet' /> -->
		<link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>assets/js/leaflet/leaflet.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>assets/css/bootstrap.min.css">
		
		
		<script src='https://api.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.js'></script>
		<script type="text/javascript" src="<?php echo base_url() ?>assets/js/jquery-1.12.4.js"></script>
		<script type="text/javascript" src="<?php echo base_url() ?>assets/js/bootstrap.min.js"></script>
		
		<script type="text/javascript" src="<?php echo base_url() ?>assets/js/leaflet/leaflet-src.js"></script>
		<script type="text/javascript" src="<?php echo base_url() ?>assets/js/leaflet/leaflet.js"></script>
		<script type="text/javascript" src="<?php echo base_url() ?>assets/js/xlsx.full.min.js"></script>
		<style type="text/css">
			#mapid {
				height: 480px;
			}
		#input-excel :hover{
			background-color: black;
		}
			
		.centered {
		/*position: fixed;*/
		margin-top: 20%;
		left: 50%;
		transform: translate(-50%, -50%);
		}
		li{
			font-size: 7pt;
		}
		.list-group-item {
		padding: 3px 10px
		}
		.list-group{
			margin-top: 10px;
		}
		#logo{
			padding-left: 5px;
			/*height: 70%;*/
			width: 45%;
			/*padding: 10px;*/
			background-color: #fff;
			border-bottom-right-radius: 20px;
			-webkit-box-shadow: 4px 2px 32px -12px rgba(0,0,0,0.91);
		-moz-box-shadow: 4px 2px 32px -12px rgba(0,0,0,0.91);
		box-shadow: 4px 2px 32px -12px rgba(0,0,0,0.91);
		}
		#front-page-panel{
			border-radius: 10px; padding: 50px;
			-webkit-box-shadow: 4px 2px 32px -12px rgba(0,0,0,0.91);
		-moz-box-shadow: 4px 2px 32px -12px rgba(0,0,0,0.91);
		box-shadow: 4px 2px 32px -12px rgba(0,0,0,0.91);

		}
		.navbar{
			padding: 0;
			padding-top: 0;
			padding-bottom: 0;
		}

		footer{
			position: fixed; left: 0; bottom: 0; width: 100%;
			background-color: #383f48;
		}
		</style>
		
	</head>
	<body>
		<input type="text" id="base_url" value="<?php echo base_url() ?>" hidden>
		<!-- <input type="file" id="input-excel" /> -->
		
		<div class="container">
			<div class="row" id="front-page">
				
				<div class="col-md-4 col-sm-6 col-xs-10 centered">
					<div class="" id="front-page-panel">
						<div class="">
							<div style="text-align: center">
								<img src="<?php echo base_url() ?>assets/images/pertamina.png" style="width: 190px;">
								<hr>
								<h4 class="text-info">SPBE <b>MAP Report</b></h4>
							</div>
							<div style="margin-top: 30px;"></div>
							
							<div class="form-group">
								
								<label class="btn btn-lg btn-block btn-primary btn-file">
									Upload<input id="input-excel" type="file" style="display: none; " accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
								</label>
								
							</div>
						</div>
					</div>
					
					
				</div>
				
				
			</div>
		</div>
		<div id="navbar">
			<nav class="navbar bg-primary">
				<!-- <a class="navbar-brand" href="#">Navbar</a> -->
				<div class="" id="logo">
					<div class="navbar-brand">
						
						<img src="<?php echo base_url() ?>assets/images/pertamina.png" style="width: 110px;">
					</div>
					
					<div class="navbar-brand">
						
						<h6 class="text-info">SPBE <b>MAP Report</b></h6>
					</div>
					<div class="navbar-brand" style="float: right;">
						<button class="btn btn-primary btn-xs" id="upload-new">UPLOAD NEW FILE</button>
					</div>
				</div>
				
				
				<!-- <div class="col-md-2 pull-right right">
						<button class="btn btn-info btn-xs">UPLOAD NEW DATA</button>
				</div> -->
			</nav>
		</div>
		<div class="container" style="margin-top: 20px;">
			<div class="row" id="map-page">
				<div class="col-md-12">
					<div id="mapid"></div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="">
				<footer id="footer">
					<!-- <div class="navbar-brand">Hello Footer</div> -->

					<h6 class="" style="color:#fff; margin-top: 20px; margin-left: 20px;">SPBE MAP REPORT &copy; 2018</h6>
				</footer>
			</div>
			
		</div>
		
		
		
		<script type="text/javascript" src="<?php echo base_url() ?>assets/js/function.js"></script>
	</body>
</html>