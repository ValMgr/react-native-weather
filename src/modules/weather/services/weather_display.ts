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

    case 45:
      return 'https://help.apple.com/assets/625460ED521B2511EE32CF0E/625460F4521B2511EE32CF50/fr_FR/73ae8300a30e895e3739cd50ade0dfe1.png';
    case 48:
      return 'https://help.apple.com/assets/625460ED521B2511EE32CF0E/625460F4521B2511EE32CF50/fr_FR/d35bb25d12281cd9ee5ce78a98cd2aa7.png';

    case 51:
    case 53:
    case 55:
      return 'https://help.apple.com/assets/625460ED521B2511EE32CF0E/625460F4521B2511EE32CF50/fr_FR/a55fef55bbeb0762a8dd329b4b8ad342.png';

    case 61:
    case 63:
    case 65:
      return 'https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/fr_FR/cc023602e469cb93a1ee585ee702beea.png';

    case 71:
    case 73:
    case 75:
    case 77:
      return 'https://help.apple.com/assets/625460ED521B2511EE32CF0E/625460F4521B2511EE32CF50/fr_FR/00171e3b54b97dee8c1a2f6a62272640.png';

    case 80:
    case 81:
      return 'https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/fr_FR/6816842292a58d78e7586a48b672e45e.png';
    case 82:
      return 'https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/fr_FR/f3378a0c9f531cf9ea96adaafc685b57.png';

    case 85:
      return 'https://help.apple.com/assets/625460ED521B2511EE32CF0E/625460F4521B2511EE32CF50/fr_FR/e95fb90fc5a4aac111be78770921beb1.png';
    case 86:
      return 'https://help.apple.com/assets/625460ED521B2511EE32CF0E/625460F4521B2511EE32CF50/fr_FR/9189cb49e806d1ebfeed24f33367143c.png';

    case 95:
      return 'https://help.apple.com/assets/625460ED521B2511EE32CF0E/625460F4521B2511EE32CF50/fr_FR/baba772faa46d8382deeeb9733f294fb.png';

    case 96:
    case 99:
      return 'https://help.apple.com/assets/625460ED521B2511EE32CF0E/625460F4521B2511EE32CF50/fr_FR/fdedf24139e08b0a1ebdf4b7df5bcdeb.png';
    
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