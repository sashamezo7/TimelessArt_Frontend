import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ArtworkListImage = () => {

  const itemData = [
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/1.Pasărea(Fluier_de_apă)_50X70cm_ulei_pe_carton.webp',
      title: 'Bed',
    },
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/2.Vatra_satului_100X100cm_ulei_pe.webp',
      title: 'Books',
    },
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/3.Catrință_tricoloră_28x32_cm_acrilic_pe_carton.webp',
      title: 'Sink',
    },
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/4.Semne_șterse(Triptic)14,8X21x3_cm_tehnică_mixtă_pe_hârtie.webp',
      title: 'Kitchen',
    },
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/5.Vrâste_42x29_cm_ulei_pe_hârtie.webp',
      title: 'Blinds',
    },
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/6.Catrință_3_28x32_cm_acrilic_pe_carton.webp',
      title: 'Chairs',
    },
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/7.Catrință_4_28x32_cm_acrilic_pe_carton.webp',
      title: 'Laptop',
    },
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/8.Obiect_de_îmbrăcăminte_uitat28X32xcm_acrylic_pe_hârtie.webp',
      title: 'Doors',
    },
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/9.Lada_de_zestre_75X95_ulei_pe_pânză.webp',
      title: 'Coffee',
    },
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/10.Lada_de_zestre_I_Tron_de_pe_Târnava_Mare_tehnica_mixta_pe_hartie.webp',
      title: 'Storage',
    },
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/11.Lada_de_zestre_II_14,8X21_tehnică_mixtă_pe_hârtie.webp',
      title: 'Candle',
    },
    {
      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/12.Lada_de_zestre_III_tehnica_mixta_pe_hartie.webp',
      title: 'Coffee table',

      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/13.Azur_45X60cm_ulei_pe_suport_plastifiat.webp',
      title: 'Coffee table',

      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/14.Pom_înflorit_40X51cm_ulei_pe_pânză.webp',
      title: 'Coffee table',

      img: 'https://timelessartblob.blob.core.windows.net/thumbnails/15.Spirit_de_Pădureni_35X49_ulei_pe_carton.webp',
      title: 'Coffee table',
    },
  ];

  return (
      <Box sx={{ width: 1200, height: 700, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={4} gap={20}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>    
  );
};

export default ArtworkListImage;
