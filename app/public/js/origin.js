import location from './global/location';

const origin = location.origin || (`${location.protocol}//${location.hostname}` + (location.port ? `:${location.port}` : ''));

export default origin;
