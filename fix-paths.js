const fs = require('fs');
const clubs = ['enactus', 'ieee', 'procegenius', 'robotique', 'sos-ambassadeurs', 'securinets'];

clubs.forEach(club => {
  const p = 'src/app/clubs/' + club + '/page.tsx';
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/getClubGalleryImages/g, 'getGalleryImages');
  c = c.replace(/"enactus"/g, '"clubs/enactus"');
  c = c.replace(/"ieee"/g, '"clubs/ieee"');
  c = c.replace(/"procegenius"/g, '"clubs/procegenius"');
  c = c.replace(/"robotique"/g, '"clubs/robotique"');
  c = c.replace(/"sos-ambassadeurs"/g, '"clubs/sos-ambassadeurs"');
  c = c.replace(/"securinets"/g, '"clubs/securinets"');
  fs.writeFileSync(p, c);
});
console.log('Done');
