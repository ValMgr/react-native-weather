export const getWeatherIcon = (code: number): string => {
  switch (code) {
    case 0:
      return 'https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/fr_FR/35c778528f79f2aa038b07526447f606.png';
    case 1:
      return 'https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/fr_FR/eebb5704c3a2c58fc97e2ed792204f2e.png';
    case 2:
      return 'https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/fr_FR/b83a352b1228b6e4c2f29e916941654e.png';
    case 3:
      return 'https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/fr_FR/6f7d4b62ee41cd6d8b3869dbd775f388.png';

    case 80:
      return 'https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/fr_FR/cc023602e469cb93a1ee585ee702beea.png';
    case 81:
      return 'https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/fr_FR/6816842292a58d78e7586a48b672e45e.png';
    case 82:
      return 'https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/fr_FR/f3378a0c9f531cf9ea96adaafc685b57.png';

    default:
      return '';
  }
};


export const getDay = (day: number): string => {

  if(day === 0) {
    return 'Aujourd\'hui';
  }

  const date = new Date();
  date.setDate(date.getDate() + day);
  const dayOfWeek = date.getDay();

  switch (dayOfWeek) {
    case 0:
      return 'Dimanche';
    case 1:
      return 'Lundi';
    case 2:
      return 'Mardi';
    case 3:
      return 'Mercredi';
    case 4:
      return 'Jeudi';
    case 5:
      return 'Vendredi';
    case 6:
      return 'Samedi';
    default:
      return '';
  }

};