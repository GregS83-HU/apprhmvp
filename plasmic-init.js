// plasmic-init.js
import { initPlasmicLoader } from '@plasmicapp/loader-nextjs';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: '7z3xcfGksCdvA9UNTDmBwf',
      token: 'mP4AeNHKB6Y4gTkd0Ss25V0DA4s1EIQjn0gT96AYvlfsEEptgEiGRmtlRmkA3MB2LEAr6ACxNCKsnWvj5Og',
    },
  ],
  preview: true,

  componentsModules:[
    {
        name: 'OpenedPositionList',
        importPath: './components/OpenedPositionList'
    },
  ],
});