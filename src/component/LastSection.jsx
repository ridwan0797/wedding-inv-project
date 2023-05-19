import React from 'react';

const LastSection = () => {
  return (
    <section className="wedding-invitation">
      <div className="content">
        <h2>Undangan Pernikahan</h2>
        <img src="/path/to/your/image.jpg" alt="Pasangan" />
        <p className="invitation-message">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami <br />
          apabila Anda, <br />
          <span className="name">Bapak/Ibu/Saudara/i [Nama Tamu]</span>, <br />
          berkenan hadir dan memberikan do'a restunya <br />
          untuk keberkahan pernikahan kami.
        </p>
        <p className="thank-you-message">
          Atas do'a dan restunya, <br />
          kami ucapkan terima kasih yang sebesar-besarnya.
        </p>
      </div>
    </section>
  );
};

export default LastSection;
