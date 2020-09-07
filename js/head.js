  // Blogger image stuff ?
  summary_noimg = 400;
  summary_img = 270;
  img_thumb_height = 150;
  img_thumb_width = 200; 

function removeHtmlTag(strx,chop){ 
	if(strx.indexOf("<")!=-1)
	{
		var s = strx.split("<"); 
		for(var i=0;i<s.length;i++){ 
			if(s[i].indexOf(">")!=-1){ 
				s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
			} 
		} 
		strx =  s.join(""); 
	}
	chop = (chop < strx.length-1) ? chop : strx.length-2; 
	while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
	strx = strx.substring(0,chop-1); 
	return strx+'...'; 
}

function createSummaryAndThumb(pID){
	var div = document.getElementById(pID);
	var imgtag = "";
	var img = div.getElementsByTagName("img");
	var summ = summary_noimg;
	if(img.length>=1) {	
		var imgurl = new URL(img[0].src);
		var imgpath = imgurl.pathname.split('/');
		    imgpath[04] = 's400';
		var imgthumb = "";
		for (i = 0; i < imgpath.length; i++) {
		  imgthumb += "/";
		  imgthumb += imgpath[i];
		}
		    imgthumb = imgurl.hostname + imgthumb.substring(1);
		imgtag = '<img src="//'+imgthumb+'" class="pbtthumbimg"/>';
		summ = summary_img;
	}
	
	var summary = imgtag + '<div style="line-height:1.6;">' + removeHtmlTag(div.innerHTML,summ) + '</div>';
	div.innerHTML = summary;
}
