//The jQuery remove() method removes the selected element(s) and its child elements.
// $(document).ready(function(){
//     $('#texte_2').on('click', function(){
//       $(this).remove();
//     });
//   });

  //empty method removes the child node of the element but the element remains
  $(document).ready(function(){
    $('#texte_2').on('click', function(){
      $(this).empty();
    });
  });