$(function(){ // on dom ready

// photos from flickr with creative commons license

var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 80,
        'width': 80,
        'background-fit': 'cover',
        'border-color': '#000',
        'border-width': 3,
        'border-opacity': 0.5
      })
    .selector('.eating')
      .css({
        'border-color': 'red'
      })
    .selector('.eater')
      .css({
        'border-width': 9
      })
    .selector('edge')
      .css({
        'width': 6,
        'target-arrow-shape': 'triangle',
        'line-color': '#ffaaaa',
        'target-arrow-color': '#ffaaaa',
        'curve-style': 'bezier'
      })
    .selector('#hp')
      .css({
        'background-image': 'http://carechain.io/nodes/hp.png'
      })
    .selector('#hollieann')
        .css({
          'background-image': 'http://carechain.io/nodes/hollieann.png'
      })
    .selector('#combient')
        .css({
          'background-image': 'http://carechain.io/nodes/combient.png'
      })
    .selector('#mycube')
      .css({
        'background-image': 'http://carechain.io/nodes/mycube.png'
      })
  .selector('#johan')
      .css({
        'background-image': 'http://carechain.io/nodes/johan.png'
      })
  .selector('#salientpoint')
      .css({
        'background-image': 'http://carechain.io/nodes/salientpoint.png'
      })
  .selector('#illinois')
      .css({
        'background-image': 'http://carechain.io/nodes/illinois.png'
      })
  .selector('#next')
      .css({
        'background-image': 'http://carechain.io/nodes/next.png'
      })
  .selector('#provivus')
      .css({
        'background-image': 'http://carechain.io/nodes/provivus.png'
      })
  .selector('#ericsson')
      .css({
        'background-image': 'http://carechain.io/nodes/ericsson.png'
      })
  .selector('#saab')
      .css({
        'background-image': 'http://carechain.io/nodes/saab.png'
      })
  .selector('#oracle')
      .css({
        'background-image': 'http://carechain.io/nodes/oracle.png'
      })
  .selector('#torsten')
      .css({
        'background-image': 'http://carechain.io/nodes/torsten.png'
      })
  .selector('#uppsala')
      .css({
        'background-image': 'http://carechain.io/nodes/uppsala.png'
      })
  .selector('#ucla')
      .css({
        'background-image': 'http://carechain.io/nodes/ucla.png'
      })
  .selector('#theresa')
      .css({
        'background-image': 'http://carechain.io/nodes/theresa.png'
      })
  .selector('#cdc')
      .css({
        'background-image': 'http://carechain.io/nodes/cdc.png'
      })
  .selector('#anders')
      .css({
        'background-image': 'http://carechain.io/nodes/anders.png'
      })
  .selector('#kth')
      .css({
        'background-image': 'http://carechain.io/nodes/kth.png'
      })
  .selector('#advatar')
      .css({
        'background-image': 'http://carechain.io/nodes/advatar.png'
      })
  .selector('#icon')
      .css({
        'background-image': 'http://carechain.io/nodes/icon.png'
      }),

  elements: {
    nodes: [
      { data: { id: 'hollieann' } },
      { data: { id: 'combient' } },
      { data: { id: 'mycube' } },
      { data: { id: 'johan' } },
      { data: { id: 'salientpoint' } },
      { data: { id: 'illinois' } },
      { data: { id: 'next' } },
      { data: { id: 'ericsson' } },
      { data: { id: 'saab' } },
      { data: { id: 'oracle' } },
      { data: { id: 'torsten' } },
      { data: { id: 'uppsala' } },
      { data: { id: 'ucla' } },
      { data: { id: 'theresa' } },
      { data: { id: 'cdc' } },
      { data: { id: 'anders' } },
      { data: { id: 'kth' } },
      { data: { id: 'icon' } },
      { data: { id: 'hp' } },
      { data: { id: 'advatar' } },
      { data: { id: 'provivus' } }
    ],
    edges: [
      { data: { source: 'hollieann', target: 'kth' } },
      { data: { source: 'hollieann', target: 'johan' } },
      { data: { source: 'hollieann', target: 'ucla' } },
      { data: { source: 'hollieann', target: 'advatar' } },
      { data: { source: 'johan', target: 'kth' } },
      { data: { source: 'johan', target: 'hollieann' } },
      { data: { source: 'johan', target: 'cdc' } },
      { data: { source: 'johan', target: 'icon' } },
      { data: { source: 'johan', target: 'advatar' } },
      { data: { source: 'johan', target: 'saab' } },
      { data: { source: 'johan', target: 'ericsson' } },
      { data: { source: 'johan', target: 'combient' } },
      { data: { source: 'johan', target: 'provivus' } },
      { data: { source: 'torsten', target: 'uppsala' } },
      { data: { source: 'torsten', target: 'next' } },
      { data: { source: 'torsten', target: 'oracle' } },
      { data: { source: 'torsten', target: 'hp' } },
      { data: { source: 'torsten', target: 'salientpoint' } },
      { data: { source: 'torsten', target: 'ericsson' } },
      { data: { source: 'torsten', target: 'combient' } },
      { data: { source: 'torsten', target: 'provivus' } },
      { data: { source: 'theresa', target: 'illinois' } },
      { data: { source: 'theresa', target: 'torsten' } },
      { data: { source: 'theresa', target: 'hp' } },
      { data: { source: 'theresa', target: 'ericsson' } },
      { data: { source: 'theresa', target: 'salientpoint' } },
      { data: { source: 'theresa', target: 'saab' } },
      { data: { source: 'theresa', target: 'provivus' } },
      { data: { source: 'anders', target: 'uppsala' } },
      { data: { source: 'anders', target: 'ericsson' } },
      { data: { source: 'anders', target: 'combient' } },
      { data: { source: 'anders', target: 'provivus' } }
    ]
  },

  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 10
  }
}); // cy init

cy.on('tap', 'node', function( e ){
  var nodes = e.target;
  var tapped = nodes;
  var food = [];

  nodes.addClass('eater');

  for(;;){
    var connectedEdges = nodes.connectedEdges(function(el){
      return !el.target().anySame( nodes );
    });

    var connectedNodes = connectedEdges.targets();

    Array.prototype.push.apply( food, connectedNodes );

    nodes = connectedNodes;

    if( nodes.empty() ){ break; }
  }

  var delay = 0;
  var duration = 500;
  for( var i = food.length - 1; i >= 0; i-- ){ (function(){
    var thisFood = food[i];
    var eater = thisFood.connectedEdges(function(el){
      return el.target().same(thisFood);
    }).source();

    thisFood.delay( delay, function(){
      eater.addClass('eating');
    } ).animate({
      position: eater.position(),
      css: {
        'width': 10,
        'height': 10,
        'border-width': 0,
        'opacity': 0
      }
    }, {
      duration: duration,
      complete: function(){
        thisFood.remove();
      }
    });

    delay += duration;
  })(); } // for

}); // on tap

}); // on dom ready
