import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src='https://images.ctfassets.net/hrltx12pl8hq/euxCffMOPuxAnPLcN3nzW/eb14f1deaa1e6edce8981124825aefb9/ULOHP.png?fit=fill&w=800&h=400' />
    </div>
    <div>
      avatarka + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          Post 1
        </div>
        <div className={s.item}>
          Post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;