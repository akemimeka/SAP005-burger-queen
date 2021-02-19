export function GoToPage(history, path) {
  history.push(`'${path}'`);
}

export function navigateAfterLogin(role) {
  switch (role) {
    case 'hall':
      GoToPage('/salao');
      break;
    case 'kitchen':
      GoToPage('/cozinha');
      break;
    default:
      break;
  }
}
