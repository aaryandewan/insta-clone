export default function User({ fullName, username, userId }) {
  console.log("IN user.js", fullName);

  return (
    <h2>
      I am a user {fullName} {username} id = {userId}
    </h2>
  );
}
