<?php
	include('inc/header.php');
?>
<title>Lanyu | Contact</title>

<div id="map"></div>
<div id="mapOverlay">
  <h1>Based in New York City</h1>
</div>
<section class="about-section">
  <h1>Over a <u>decade</u> of excellence</h1>
  <div class="lanyu-story-container">
    <div class="lanyu-story-bg" style="background-image:url('http://i.imgur.com/LpGYpc4.jpg')"></div>
    <button class="open-overlay">Read The Lanyu Story<br />&rarr;</button>
    <div class="lanyu-story-overlay">
      <button class="close-overlay">&times;</button>
      <div style="background-image:url('./img/182kmuY.jpg');"></div>
      <p>
        In 2005, she formed Lan Yu Studio's in Beijing. In 2006, Lan won the award for <b>'Best Minority Style Evening Wear'</b>. In 2008, Lan Yu Studios was acquired by Chinatex Corporation with Lan remaining as Creative Director while studying in New York. Lan returned to China in 2009 and in September of that year retook control and ownership of Lan Yu Studios. The same year she was voted as one of <b>'China's Top 10 Designers'</b> by the China Designers Association as well as the <b>'Designer with the Highest Media Attention'</b>. In 2012, Lan was again voted the <b>'Designer with the Highest Media Attention'</b> and <b>'Asia's Most Influential Designer (Fashion Category) at the Asian Fashion Awards'</b>. In the same year she was also awarded <b>'The Star's Favourite Designer'</b> by COSMOBride China. In 2013, MSN awarded Lan Yu with <b>'China's Most Influential Designer'</b>. IN 2013 Lan Yu was listed in Forbes China's list of <b>2014 Forbes China 30 Under 30: Rising Stars Of Entrepreneurism In China</b>
        <br /><br /> 
        Lan's designs balance Chinese embroidery techniques with Western structural designs. Her designs exhibit a knowledge of Su Xiu, a form of traditional Chinese embroidery handed down through three generations of her family, as well as formal studies in Western couture design to produce a style that integrates elements from both cultures. Her pieces are regularly featured on celebrity clients at Cannes, Venice, Tokyo and Berlin Film Festival, as well as China’s film festivals and other red carpet events.
      </p>
    </div>
  <div/>
</section>
  <hr class="form-seperator" />
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