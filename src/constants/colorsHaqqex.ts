export type TColor =
  | 'YELLOW6'
  | 'YELLOW5'
  | 'YELLOW4'
  | 'YELLOW3'
  | 'YELLOW2'
  | 'YELLOW1'
  | 'DARK6'
  | 'DARK5'
  | 'DARK4'
  | 'DARK3'
  | 'DARK2'
  | 'DARK1'
  | 'LIGHT6'
  | 'LIGHT5'
  | 'LIGHT4'
  | 'LIGHT3'
  | 'LIGHT2'
  | 'LIGHT1'
  | 'SUCCESS4'
  | 'SUCCESS3'
  | 'SUCCESS2'
  | 'SUCCESS1'
  | 'ERROR4'
  | 'ERROR3'
  | 'ERROR2'
  | 'ERROR1'
  | 'ERROR_INPUT'
  | 'WHITE'
  | 'SUCCESS_INPUT'
  | 'TRANSPARENT'
  | 'BACKGROUND'
  |'YELLOW7'
  | 'BLACK';

const colorsHaqqex = {
  YELLOW7: '#67CE67',
  YELLOW6: '#6C8F07',
  YELLOW5: '#8CB617',
  YELLOW4: '#AADE16',
  YELLOW3: '#C4F538',
  YELLOW2: '#DBFF75',
  YELLOW1: '#E3FAA2',
  DARK6: '#10151B',
  DARK5: '#171D25',
  DARK4: '#1F2630',
  DARK3: '#29313E',
  DARK2: '#333B48',
  DARK1: '#525A67',
  LIGHT6: '#6A7484',
  LIGHT5: '#9AA2B0',
  LIGHT4: '#B4BBC3',
  LIGHT3: '#DBDEE1',
  LIGHT2: '#EAEDEE',
  LIGHT1: '#FCFCFC',
  SUCCESS_INPUT: 'rgba(51,59,72,1)',
  SUCCESS4: '#46D5B2',
  SUCCESS3: '#38A58C',
  SUCCESS2: '#2B7466',
  SUCCESS1: '#1D4540',
  ERROR_INPUT: 'rgba(255, 76, 76, 0.5)',
  ERROR4: '#FF4C4C',
  ERROR3: '#C33E40',
  ERROR2: '#883033',
  ERROR1: '#4C2327',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  TRANSPARENT: 'TRANSPARENT',
  BACKGROUND: 'rgba(16, 20, 27, 1)',
} as Record<TColor, string>;

export default colorsHaqqex;
