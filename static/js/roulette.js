var linkArray = [
  //{{- range sort (where .Site.RegularPages ".File.Dir" "shelf/music/") "Params.link" -}}{{- if isset .Params "link" -}}"{{ .Params.link }}",{{- end -}}{{- end -}}, // FOR INLINE JS
  //"https://www.youtube.com/watch?v=ll3CMgiUPuU", // A Love Supreme
  //"https://www.youtube.com/watch?v=p0mRIhK9seg&list=OLAK5uy_mymGUsuQylQF-XaBVxL03JaOpCXGOak9M&index=1", // Debut
  //"https://www.youtube.com/watch?v=0zfZ6EruSBc&list=OLAK5uy_l5Ey7lSE78A6gusFGtUqiNfHmZ_z_2zBs&index=1", // Rufusized
  //"https://www.youtube.com/watch?v=yDnfgIUbXbY&list=OLAK5uy_n6eoI3LSNgNMxHyr5JtuX8j3zhcMCmtIc&index=1", // Talking Book
  //"https://www.youtube.com/watch?v=UvtYEdYjkJM&list=OLAK5uy_lhH2tH_BEiKMkDmYqfFQqzNTo7C_qf0FE", // Innervisions
  //"https://www.youtube.com/watch?v=_ZditPOzJnM&list=OLAK5uy_mcG_CMFTptcsuZrsFVztPqlrZaLuaGnSQ&index=1", // Songs in the Key of Life
  //"https://www.youtube.com/watch?v=k-pbhe51Who&list=OLAK5uy_kkYtxqsM7Eqy9RU6kme2775Gz24EBtcXw&index=1", // Cannonball / Nancy
  //"https://www.youtube.com/watch?v=bmbqb6fI06A&list=OLAK5uy_lkQRvg50t-8VfGg1MVSrwZHF65s0Tvdes&index=7", // Bird Songs of a Killjoy
  //"https://www.youtube.com/watch?v=QazbdfH6NI0", // Our Man in Paris
  //"https://www.youtube.com/watch?v=GcRQAQUpPZA&list=OLAK5uy_mDJkyLfBJx9yfctYhY9gWbyp5AmSDQhzs&index=1", // Go!
  //"https://www.youtube.com/watch?v=5lxfa4Vrhes&list=OLAK5uy_mwyvUWNp21gPAUHrTZtYrSZ6SPwegb0Yc&index=1", // Cosmogramma
  //"https://www.youtube.com/watch?v=STlgJEFtmeg&list=OLAK5uy_klGDnlEcgKfuGAB0ALNSjlD-EKKN01Sb4&index=13", // Hilary Hahn plays Bach
  ];

function fetchMusicLinks() {
  fetch('/music/music.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json()
    })
    .then(data => {
      linkArray = data;
      updateLink();
    })
    .catch(error => console.error('Error fetching music links:', error));
}

function updateLink() {
  if (linkArray.length > 0) {
    var num = Math.floor(Math.random() * linkArray.length);
    document.getElementById("random-music-link").setAttribute("href",linkArray[num]);
  }
};

fetchMusicLinks();

document.getElementById("random-music-link").addEventListener("click",updateLink);
