import { useState } from 'react';

const Home = () => {
    const [benefit, setBenefit] = useState([
        { title: 'Kemudahan Akses', body: 'Memberikan kemudahan akses belajar bagi masyarakat.', id: 1 },
        { title: 'Sarana Pengabdian Masyarakat', body: 'Menjadikan BETIS sebagai sarana pengabdian masyarakat bagi mahasiswa UI dalam bidang pendidikan.', id: 2},
        { title: 'Optimalkan Potensi', body: 'Mengoptimalkan potensi untuk mengadakan bimbingan belajar gratis.', id: 3},
        { title: 'Suasana Bersahabat', body: 'Menciptakan suasana yang bersahabat selama berjalannya BETIS 2021.', id: 4}
      ]);
    
    return(
        <div className="home">
            {benefit.map((fit) => (
                <div className="benefit-view" key={fit.id}>
                    <h2>{ fit.title }</h2>
                    <p>{ fit.body }</p>
                </div>
            ))}
        </div>
    );
}

export default Home;