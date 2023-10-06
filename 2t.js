/*Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и
использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис,
который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет
POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о
пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис.
Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
 */

const saveUserData = (user) => {
  return fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`FAILED TO POST DATA: ${res.status}`);
      }
      /*To make sure everything worked:*/
      return res.json();
    })
    .catch((e) => {
      throw new Error(`NETWORK ERROR: ${e}`);
    });
};

const user = {
  name: "John Doe",
  job: "unknown",
};

saveUserData(user)
  .then((userData) => {
    console.log(
      "User data saved successfully!:", userData
    );
  })
  .catch((error) => {
    console.log(error.message);
  });
