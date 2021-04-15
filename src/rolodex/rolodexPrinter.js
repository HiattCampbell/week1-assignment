import people from './people.json';

people.forEach(({ name, email, phone }) => {
  const names = name.split(' ');
  const [firstName, lastName] = names;

  console.log(`First name: ${firstName} 
  Last name: ${lastName}
  Email: ${email}
  Phone number: ${phone}
  `);
});
