/*Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и
использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать
промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден,
промис должен быть отклонен с соответствующим сообщением об ошибке.*/

const getUserData = (id) => {
  const url = id !== "" && `https://reqres.in/api/user/${id}`;
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`FAILED TO FETCH DATA: ${res.status}`);
      } else {
        return res.json().then((userData) => {
          if (userData.error) {
            throw new Error(`USER NOT FOUND: ${userData.error}`);
          }
          return userData.data;
        });
      }
    })
    .catch((e) => {
      throw new Error(`NETWORK ERROR: ${e}`);
    });
};

getUserData(4)
  .then((user) => console.log(user))
  .catch((e) =>
    console.error(`SOME KIND OF ERROR THAT I DIDN'T FORESEE: ${e}`),
  );
