const statuses = {
  badRequest: 400,
  notFound: 404,
  default: 500,
  conflict: 409,
  forbidden: 403,
  unauthorized: 401,
};
const messages = {
  notFound: 'По указанному пути ничего не найдено',
  serverError: 'На сервере произошла ошибка',
  unauthorized: 'Необходима авторизация',
  user: {
    notFound: 'Пользователь по данному id не найден',
    loginBadData: 'Передан неверный логин или пароль',
    updateBadData: 'Переданы некорректные данные при обновлении данных пользователя',
    conflictEmail: 'Пользователь с указанным email уже существует',
    badData: 'Переданы некорректные данные',
  },
  movies: {
    notFound: 'Фильм с таким id не найден',
    badData: 'Переданы некорректные данные при создании фильма',
    cannotDeleted: 'Вы можете удалять только свои фильмы',
  },
};

module.exports = { statuses, messages };
