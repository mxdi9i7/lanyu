<?php
	include('inc/header.php');
?>
<title>Lanyu | Contact</title>

<div id="map"></div>
<div id="mapOverlay"></div>
<section class="about-section">
  <h1>The Lanyu Story</h1>
  <img src="http://i.imgur.com/LpGYpc4.jpg" class="responsive-img">
  <p>In 2005, she formed Lan Yu Studio's in Beijing. In 2006, Lan won the award for 'Best Minority Style Evening Wear'. In 2008, Lan Yu Studios was acquired by Chinatex Corporation with Lan remaining as Creative Director while studying in New York. Lan returned to China in 2009 and in September of that year retook control and ownership of Lan Yu Studios. The same year she was voted as one of 'China's Top 10 Designers' by the China Designers Association as well as the 'Designer with the Highest Media Attention'. In 2012, Lan was again voted the 'Designer with the Highest Media Attention' and 'Asia's Most Influential Designer (Fashion Category) at the Asian Fashion Awards. In the same year she was also awarded 'The Star's Favourite Designer' by COSMOBride China. In 2013, MSN awarded Lan Yu with 'China's Most Influential Designer'. IN 2013 Lan Yu was listed in Forbes China's list of 2014 Forbes China 30 Under 30: Rising Stars Of Entrepreneurism In China
Lan's designs balance Chinese embroidery techniques with Western structural designs. Her designs exhibit a knowledge of Su Xiu, a form of traditional Chinese embroidery handed down through three generations of her family, as well as formal studies in Western couture design to produce a style that integrates elements from both cultures. Her pieces are regularly featured on celebrity clients at Cannes, Venice, Tokyo and Berlin Film Festival, as well as China’s film festivals and other red carpet events.</p>
</section>
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