var analyze = function(hyperfeed_jquery_obj){
  var analysis = {}
  var title_div = $(hyperfeed_jquery_obj).find('.mbs._6m6._2cnj._5s6c')
  var desc_div = $(hyperfeed_jquery_obj).find('._6m7._3bt9')
  var outlet_div = $(hyperfeed_jquery_obj).find('._6lz._6mb.ellipsis')
  
  if (desc_div.length + title_div.length == 2) {
  	analysis           =news_data[$.trim(outlet_div.text().split(/\|.+/)[0]).toLowerCase()] || {};
    analysis['title']  =title_div.text();
  	analysis['desc']   =desc_div.text();
  	analysis['url']    =$.trim(outlet_div.text().split(/\|.+/)[0]).toLowerCase();
    //spell check function brain
    var spelling_score = 0 
    $(title_div.text().match(/\w+/g)).each(function() {
      if (!this.match(/.+[A-Z\'\-\!\:].+/)) spelling_score += !dictionary.check(this);
    });
    $(desc_div.text().match(/\w+/g)).each(function() {
      if (!this.match(/.+[A-Z\'\-\!\:].+/)) spelling_score += !dictionary.check(this);
    });
    analysis['spelling'] = spelling_score
    //end spell check function  
  }
  return(analysis);
};
