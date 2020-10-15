var affads = [
  '<a href="https://out.lowendsite.com/uptime-test-statuscake" rel="nofollow" target="_blank"><img loading="lazy" alt="Speed Test Monitoring" src="https://partners.statuscake.com/accounts/default1/yeb4k6h/e23d6284.png" title="Speed Test Monitoring"/></a><img class="pix" src="https://partners.statuscake.com/scripts/yei4k6h?a_aid=5f40b6ec2a613&a_bid=e23d6284" width="1" height="1" alt="" />',
  '<a href="https://out.lowendsite.com/dns-hosting-cloudns" rel="nofollow" target="_blank"><img loading="lazy" alt="" src="https://www.cloudns.net/images/web/b/orange3.png" title=""/></a>',
  '<a href="https://out.lowendsite.com/managed-wp-hosting-accuweb" target="_blank" rel="nofollow"><img loading="lazy" src="https://www.accuwebhosting.com/ref/media/banners/wordpress_hosting_250x250.jpg" alt="Fully Managed WordPress Hosting"></a>',
  '<a href="https://out.lowendsite.com/windows-vps-accuweb" target="_blank" rel="nofollow"><img loading="lazy" src="https://www.accuwebhosting.com/web-images/banners/windows_vps_250x250.jpg" alt="LOW COST WINDOWS VPS HOSTING starting at just $7.99/month"></a>'    
];

var randNum     = Math.floor(Math.random() * (3 - 0 + 1)) + 0; /* http://stackoverflow.com/a/1527834/477958 num of banners minus 1*/
 
var newBannerImg  = affads[randNum];
  
// update new img src and link HREF value
$('#links1').append(newBannerImg);
