export default function hpRestoreOf(item){
    switch (item){
      case 'potion':
        return 20;
      case 'super-potion':
        return 50;
      case 'hyper-potion':
        return 200;
      default:
        return 0;
    }
  };