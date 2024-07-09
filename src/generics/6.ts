// Завдання 6
// У вас є тип Form, який містить інформацію про форму,
//  включаючи поле errors. Ви хочете створити новий тип
//   Params, який включає всі поля з Form, крім errors.
// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
// type Params = Form; 

//Omit<T, K> - Це Pick, але навпаки. 
//Дозволяє створити новий тип на основі типу T шляхом 
//виключення набору властивостей, зазначених у K.

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

export{};