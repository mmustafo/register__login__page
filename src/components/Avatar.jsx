

function Avatar({user}) {
  return (
    <div className="avatar flex flex-col gap-3 bg-[#fefaf4]">
      <div className="mask mask-squircle w-24">
        <img src={user.photoURL} />
      </div>
      <h2>Hello {user.displayName}</h2>
    </div>
  );
}

export default Avatar;
