export function GoToPage(history, path) {
  history.push(path);
}

export function navigateAfterLogin(history, role) {
  switch (role) {
    case 'hall':
      GoToPage(history, '/salao');
      break;
    case 'kitchen':
      GoToPage(history, '/cozinha');
      break;
    default:
      break;
  }
}
