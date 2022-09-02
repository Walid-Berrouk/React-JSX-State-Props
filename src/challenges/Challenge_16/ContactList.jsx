export default function UserList({contacts}) {
    return (
      <div>
        {contacts.map((contact) => (
          <div className="card p-20" key={contact.phonenumber}>
            <p className="card-name">Name : {contact.name}</p>
            <p>Email : {contact.email}</p>
            <p>Phone Number : {contact.phonenumber}</p>
          </div>
        ))}
      </div>
    );
  }