<?php
	include('inc/header.php');
?>
<title>Lanyu | Contact</title>

<div id="map"></div>
<div id="mapOverlay"></div>
  <div class="row contactForm">
  	<h1>Say Hello</h1>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate" name="html_fname">
          <label for="icon_prefix">First Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate" name="html_lname">
          <label for="icon_prefix">Last Name</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">phone</i>
          <input id="icon_prefix" type="tel" class="validate" name="html_phone">
          <label for="icon_prefix">Phone Number</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input id="icon_prefix" type="email" class="validate" name="html_email">
          <label for="icon_prefix">Email</label>
        </div>
        <div class="input-field col s12">
        	<i class="material-icons prefix">message</i>
            <textarea id="textarea1" class="materialize-textarea" length="120" name="html_message"></textarea>
            <label for="textarea1">Message</label>
        </div>
      </div>
        <button id="contactSubmit" class="btn btn-large waves-effect waves-light white black-text" type="submit" name="action">Submit<i class="material-icons right">send</i></button>
    </form>
  </div>


<?php
	include('inc/footer.php');
?>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_VPio-EZSnphxO8cyXYe1jX4nX9N7eoU&callback=initMap"></script>