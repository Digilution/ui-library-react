// Theme
export { ThemeProvider, useTheme } from 'styled-components';
export { default as theme } from './theme';

// Components
export { default as Defaults } from './components/Defaults'; 
export { default as Button } from './components/Button';
export { default as Container } from './components/Container';
export { default as ButtonGroup } from './components/ButtonGroup';
export { default as Chip } from './components/Chip';
export { default as Avatar } from './components/Avatar';
export { default as Badge } from './components/Badge';
export { default as Alert } from './components/Alert';
export { default as TextField } from './components/TextField';
export { default as TextArea } from './components/TextArea';
export { default as Action } from './components/Action';

// Functions 
export const brand = () => {
    console.log('%cDigilution', 'font-size: 32px; font-weight: 900; padding: 40px 100px 40px 115px; background: black; color: white;');
    console.log('%cThis website is produced by Digilution', 'font-size: 16px; padding: 5px 20px; background: black; color: white;');
    console.log('%cwww.digilution.agency', 'font-size: 16px; padding: 5px 102px; background: black; color: white;');
    console.log('%chello@digilution.agency', 'font-size: 16px; padding: 5px 92px; background: black; color: white;');
}