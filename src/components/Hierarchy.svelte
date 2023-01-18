<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  let container;
  console.log('hello');
  onMount(() => {
    draw();
  });
  function draw() {
    console.log('yes firing');
    var selection = [];
    var treeData = {
      name: 'comparisons',
      children: [
        {
          id: 1,
          name: 'Cow',
          assemblies: ['bosTau8'],
          children: [
            {
              name: 'bosTau8',
              children: [
                {
                  name: 'bosTau8tomm10',
                  comparison: 'bosTau8tomm10',
                  value: 3938,
                  label: 'Blastz using bosTau8 as reference and mm10 as query',
                  querygenome: 'mm10',
                  metadata: {
                    name: 'mm10',
                  },
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/bosTau8/weaver/bosTau8_mm10_axt.gz',
                },
              ],
            },
          ],
          thumbnail: 'https://vizhub.wustl.edu/public/bosTau8/Cow.png',
        },
        {
          id: 2,
          name: 'Zebrafish',
          assemblies: ['danRer11', 'danRer7', 'danRer10'],
          children: [
            {
              name: 'danRer11',
              children: [
                {
                  name: 'danRer11tolepOcu1',
                  comparison: 'danRer11tolepOcu1',
                  value: 4938,
                  label:
                    'Ensembl lastz using zebrafish danRer11 as reference and lepOcu1 as query',
                  querygenome: 'lepOcu1',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/danRer11/weaver/danRer11.lepocu1.gz',
                },
              ],
            },
            {
              name: 'danRer7',
              children: [],
            },
          ],
          thumbnail:
            'https://epigenomegateway.wustl.edu/browser/images/Zebrafish.png',
        },
        {
          id: 3,
          name: 'Human',
          assemblies: ['hg19', 'hg38'],
          thumbnail:
            'https://epigenomegateway.wustl.edu/browser/images/Human.png',
          children: [
            {
              name: 'hg19',
              children: [
                {
                  name: 'hg19tomm9',
                  comparison: 'hg19tomm9',
                  value: 938,
                  label: 'Query mouse mm9 to hg19 blastz',
                  querygenome: 'mm9',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19_mm9_axt.gz',
                },
                {
                  name: 'hg19tomm10',
                  comparison: 'hg19tomm10',
                  value: 338,
                  label: 'Query mouse mm10 to hg19 blastz',
                  querygenome: 'mm10',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19_mm10_axt.gz',
                },
                {
                  name: 'hg19torn4',
                  comparison: 'hg19torn4',
                  value: 1338,
                  label: 'Query rat rn4 to hg19 blastz',
                  querygenome: 'rn4',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19_rn4_axt.gz',
                },
                {
                  name: 'hg19torheMac3',
                  comparison: 'hg19torheMac3',
                  value: 338,
                  label: 'Query rhesus macaque rheMac3 to hg19 blastz',
                  querygenome: 'rheMac3',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19_rheMac3_axt.gz',
                },
                {
                  name: 'hg19todanRer7',
                  comparison: 'hg19todanRer7',
                  value: 338,
                  label: 'Query zebrafish danRer7 to hg19 blastz',
                  querygenome: 'danRer7',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19_danRer7_axt.gz',
                },
                {
                  name: 'hg19tocalJac3',
                  comparison: 'hg19tocalJac3',
                  value: 338,
                  label: 'Query marmoset calJac3 to hg19 blastz',
                  querygenome: 'calJac3',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19-calJac3.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsCalJac3/axtNet/',
                  },
                },
                {
                  name: 'hg19todanRer10',
                  comparison: 'hg19todanRer10',
                  value: 338,
                  label: 'Query zebrafish danRer10 to hg19 blastz',
                  querygenome: 'danRer10',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19-danRer10.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsDanRer10/axtNet/',
                  },
                },
                {
                  name: 'hg19togorGor3',
                  comparison: 'hg19togorGor3',
                  value: 338,
                  label: 'Query gorilla gorgor3 to hg19 blastz',
                  querygenome: 'gorGor3',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19-gorGor3.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsGorGor3/axtNet/',
                  },
                },
                {
                  name: 'hg19topanTro4',
                  comparison: 'hg19topanTro4',
                  value: 338,
                  label: 'Query chimp panTro4 to hg19 blastz',
                  querygenome: 'panTro4',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19-panTro4.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsPanTro4/axtNet/',
                  },
                },
                {
                  name: 'hg19topanTro5',
                  comparison: 'hg19topanTro5',
                  value: 338,
                  label: 'Query chimp panTro5 to hg19 blastz',
                  querygenome: 'panTro5',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19-panTro5.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsPanTro5/axtNet/',
                  },
                },
                {
                  name: 'hg19topanTro6',
                  comparison: 'hg19topanTro6',
                  value: 338,
                  label: 'Query chimp panTro6 to hg19 blastz',
                  querygenome: 'panTro6',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19-panTro6.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsPanTro6/',
                  },
                },
                {
                  name: 'hg19topapAnu2',
                  comparison: 'hg19topapAnu2',
                  value: 338,
                  label: 'Query baboon papAnu2 to hg19 blastz',
                  querygenome: 'papAnu2',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19-papAnu2.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsPapAnu2/axtNet/',
                  },
                },
                {
                  name: 'hg19torn6',
                  comparison: 'hg19torn6',
                  value: 338,
                  label: 'Query rat rn6 to hg19 blastz',
                  querygenome: 'rn6',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg19/weaver/hg19-rn6.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsRn6/axtNet/',
                  },
                },
              ],
            },
            {
              name: 'hg38',
              children: [
                {
                  name: 'hg38tomm10',
                  comparison: 'hg38tomm10',
                  value: 338,
                  label: 'Query mouse mm10 to hg38 blastz',
                  querygenome: 'mm10',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38_mm10_axt.gz',
                },
                {
                  name: 'hg38topanTro5',
                  comparison: 'hg38topanTro5',
                  value: 338,
                  label: 'Query chimpanzee panTro5 to hg38 blastz',
                  querygenome: 'panTro5',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38_panTro5_axt.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsPanTro5/',
                  },
                },
                {
                  name: 'hg38topanTro6',
                  comparison: 'hg38topanTro6',
                  value: 338,
                  label: 'Query chimpanzee panTro6 to hg38 blastz',
                  querygenome: 'panTro6',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38TopanTro6.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'http://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsPanTro6/',
                  },
                },
                {
                  name: 'hg38torheMac3',
                  comparison: 'hg38torheMac3',
                  value: 338,
                  label: 'Query rhesus Macaque rheMac3 to hg38 blastz',
                  querygenome: 'rheMac3',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38_rheMac3_axt.gz',
                },
                {
                  name: 'hg38topapAnu2',
                  comparison: 'hg38topapAnu2',
                  value: 338,
                  label: 'Query baboon papAnu2 to hg38 blastz',
                  querygenome: 'papAnu2',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38.papAnu2.net.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsPapAnu2/',
                  },
                },
                {
                  name: 'hg38tobosTau8',
                  comparison: 'hg38tobosTau8',
                  value: 338,
                  label: 'Query cow bosTau8 to hg38 blastz',
                  querygenome: 'bosTau8',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38-bosTau8.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsBosTau8/',
                  },
                },
                {
                  name: 'hg38tocalJac3',
                  comparison: 'hg38tocalJac3',
                  value: 338,
                  label: 'Query marmoset calJac3 to hg38 blastz',
                  querygenome: 'calJac3',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38-calJac3.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsCalJac3/',
                  },
                },
                {
                  name: 'hg38togalGal6',
                  comparison: 'hg38togalGal6',
                  value: 338,
                  label: 'Query chicken galGal6 to hg38 blastz',
                  querygenome: 'galGal6',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38-galGal6.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsGalGal6/',
                  },
                },
                {
                  name: 'hg38togorGor4',
                  comparison: 'hg38togorGor4',
                  value: 338,
                  label: 'Query gorilla gorGor4 to hg38 blastz',
                  querygenome: 'gorGor4',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38-gorGor4.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsGorGor4/',
                  },
                },
                {
                  name: 'hg38tomm39',
                  comparison: 'hg38tomm39',
                  value: 338,
                  label: 'Query mouse mm39 to hg38 blastz',
                  querygenome: 'mm39',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38-mm39.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsMm39/',
                  },
                },
                {
                  name: 'hg38topanTro4',
                  comparison: 'hg38topanTro4',
                  value: 338,
                  label: 'Query chimp panTro4 to hg38 blastz',
                  querygenome: 'panTro4',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38-panTro4.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsPanTro4/',
                  },
                },
                {
                  name: 'hg38torheMac8',
                  comparison: 'hg38torheMac8',
                  value: 338,
                  label: 'Query rhesus rheMac8 to hg38 blastz',
                  querygenome: 'rheMac8',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38-rheMac8.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsRheMac8/',
                  },
                },
                {
                  name: 'hg38torn6',
                  comparison: 'hg38torn6',
                  value: 338,
                  label: 'Query rat rn6 to hg38 blastz',
                  querygenome: 'rn6',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/hg38/weaver/hg38.rn6.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsRn6/',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 4,
          name: 'Mouse',
          assemblies: ['mm9', 'mm10'],
          children: [
            {
              name: 'mm10',
              children: [
                {
                  name: 'mm10todanRer7',
                  comparison: 'mm10todanRer7',
                  value: 338,
                  label: 'Query zebrafish danRer7 to mm10 blastz',
                  querygenome: 'danRer7',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10_danRer7_axt.gz',
                },
                {
                  name: 'mm10tohg19',
                  comparison: 'mm10tohg19',
                  value: 338,
                  label: 'Query human hg19 to mm10 blastz',
                  querygenome: 'hg19',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10_hg19_axt.gz',
                },
                {
                  name: 'mm10tohg38',
                  comparison: 'mm10tohg38',
                  value: 338,
                  label: 'Query human hg38 to mm10 blastz',
                  querygenome: 'hg38',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10_hg38_axt.gz',
                },
                {
                  name: 'mm10torheMac3',
                  comparison: 'mm10torheMac3',
                  value: 338,
                  label: 'Query rhesus macaque rheMac3 to mm10 blastz',
                  querygenome: 'rheMac3',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10_rheMac3_axt.gz',
                },
                {
                  name: 'mm10torn6',
                  comparison: 'mm10torn6',
                  value: 338,
                  label: 'Query rat rn6 to mm10 blastz',
                  querygenome: 'rn6',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10.rn6.gz',
                },
                {
                  name: 'mm10tobosTau8',
                  comparison: 'mm10tobosTau8',
                  value: 338,
                  label: 'Query cow bosTau8 to mm10 blastz',
                  querygenome: 'bosTau8',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10-bosTau8.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm10/vsBosTau8/axtNet/',
                  },
                },
                {
                  name: 'mm10tocalJac3',
                  comparison: 'mm10tocalJac3',
                  value: 338,
                  label: 'Query marmoset calJac3 to mm10 blastz',
                  querygenome: 'calJac3',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10-calJac3.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm10/vsCalJac3/axtNet/',
                  },
                },
                {
                  name: 'mm10todanRer10',
                  comparison: 'mm10todanRer10',
                  value: 338,
                  label: 'Query zebrafish danRer10 to mm10 blastz',
                  querygenome: 'danRer10',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10-danRer10.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm10/vsDanRer10/axtNet/',
                  },
                },
                {
                  name: 'mm10todanRer11',
                  comparison: 'mm10todanRer11',
                  value: 338,
                  label: 'Query zebrafish danRer11 to mm10 blastz',
                  querygenome: 'danRer11',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10-danRer11.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm10/vsDanRer11/axtNet/',
                  },
                },
                {
                  name: 'mm10togalGal5',
                  comparison: 'mm10togalGal5',
                  value: 338,
                  label: 'Query chicken galGal5 to mm10 blastz',
                  querygenome: 'galGal5',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10-galGal5.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm10/vsGalGal5/axtNet/',
                  },
                },
                {
                  name: 'mm10togalGal6',
                  comparison: 'mm10togalGal6',
                  value: 338,
                  label: 'Query chicken galGal6 to mm10 blastz',
                  querygenome: 'galGal6',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10-galGal6.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm10/vsGalGal6/axtNet/',
                  },
                },
                {
                  name: 'mm10togorGor3',
                  comparison: 'mm10togorGor3',
                  value: 338,
                  label: 'Query gorilla gorGor3 to mm10 blastz',
                  querygenome: 'gorGor3',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10-gorGor3.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm10/vsGorGor3/axtNet/',
                  },
                },
                {
                  name: 'mm10topanTro4',
                  comparison: 'mm10topanTro4',
                  value: 338,
                  label: 'Query chimp panTro4 to mm10 blastz',
                  querygenome: 'panTro4',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10-panTro4.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm10/vsPanTro4/axtNet/',
                  },
                },
                {
                  name: 'mm10topanTro5',
                  comparison: 'mm10topanTro5',
                  value: 338,
                  label: 'Query chimp panTro5 to mm10 blastz',
                  querygenome: 'panTro5',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10-panTro5.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm10/vsPanTro5/axtNet/',
                  },
                },
                {
                  name: 'mm10topanTro6',
                  comparison: 'mm10topanTro6',
                  value: 338,
                  label: 'Query chimp panTro6 to mm10 blastz',
                  querygenome: 'panTro6',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10-panTro6.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm10/vsPanTro6/axtNet/',
                  },
                },
                {
                  name: 'mm10torheMac8',
                  comparison: 'mm10torheMac8',
                  value: 338,
                  label: 'Query rhesus rheMac8 to mm10 blastz',
                  querygenome: 'rheMac8',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm10/weaver/mm10-rheMac8.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm10/vsRheMac8/axtNet/',
                  },
                },
              ],
            },
            {
              name: 'mm9',
              children: [
                {
                  name: 'mm9tohg19',
                  comparison: 'mm9tohg19',
                  value: 338,
                  label: 'Query human hg19 to mm9 blastz',
                  querygenome: 'hg19',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm9/weaver/mm9_hg19_axt.gz',
                },
                {
                  name: 'mm9tocalJac3',
                  comparison: 'mm9tocalJac3',
                  value: 338,
                  label: 'Query marmoset calJac3 to mm9 blastz',
                  querygenome: 'calJac3',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/mm9/weaver/mm9-calJac3.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/mm9/vsCalJac3/axtNet/',
                  },
                },
              ],
            },
          ],
          thumbnail:
            'https://epigenomegateway.wustl.edu/browser/images/Mouse.png',
        },
        {
          id: 5,
          name: 'Rat',
          assemblies: ['rn4', 'rn5', 'rn6'],
          children: [],
          thumbnail:
            'https://epigenomegateway.wustl.edu/browser/images/Rat.png',
        },
        {
          id: 6,
          name: 'Monkey',
          assemblies: ['rheMac3', 'rheMac8'],
          children: [
            {
              name: 'rheMac3',
              children: [
                {
                  name: 'rheMac3tohg19',
                  comparison: 'rheMac3tohg19',
                  value: 338,
                  label: 'Query human hg19 to rheMac3 blastz',
                  querygenome: 'hg19',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/rheMac3/rheMac3_hg19.gz',
                },
              ],
            },
          ],
          thumbnail:
            'https://epigenomegateway.wustl.edu/browser/images/Rhesus%20macaque.png',
        },
        {
          id: 7,
          name: 'Spotted_Gar',
          assemblies: ['lepOcu1'],
          children: [],
          thumbnail: 'https://vizhub.wustl.edu/public/lepOcu1/SpottedGar.png',
        },
        {
          id: 8,
          name: 'Chimp',
          assemblies: ['panTro4', 'panTro5', 'panTro6'],
          children: [
            {
              name: 'panTro4',
              children: [
                {
                  name: 'panTro4tohg19',
                  comparison: 'panTro4tohg19',
                  value: 338,
                  label: 'Query human hg19 to panTro4 blastz',
                  querygenome: 'hg19',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/panTro4/panTro4_hg19.gz',
                },
              ],
            },
            {
              name: 'panTro5',
              children: [
                {
                  name: 'panTro5tohg38',
                  comparison: 'panTro5tohg38',
                  value: 338,
                  label: 'Query human hg38 to panTro5 blastz',
                  querygenome: 'hg38',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/panTro5/weaver/panTro5_hg38_axt.gz',
                  details: {
                    source: 'UCSC Genome Browser',
                    'download url':
                      'https://hgdownload.soe.ucsc.edu/goldenPath/panTro5/vsHg38/',
                  },
                },
              ],
            },
          ],
          thumbnail:
            'https://epigenomegateway.wustl.edu/browser/images/Chimp.png',
        },
        {
          id: 11,
          name: 'Seahare',
          assemblies: ['aplCal3'],
          children: [],
          thumbnail: 'https://vizhub.wustl.edu/public/aplCal3/seaHare.png',
        },
        {
          id: 12,
          name: 'Chicken',
          assemblies: ['galGal5', 'galGal6'],
          children: [],
          thumbnail:
            'https://epigenomegateway.wustl.edu/browser/images/Chicken.png',
        },
        {
          id: 13,
          name: 'C. elegans',
          assemblies: ['ce11'],
          children: [],
          thumbnail:
            'https://epigenomegateway.wustl.edu/legacy/images/C.elegans.png',
        },
        {
          id: 14,
          name: 'Drosophila melanogaster',
          assemblies: ['dm6'],
          children: [],
          thumbnail:
            'https://epigenomegateway.wustl.edu/legacy/images/Fruit%20fly.png',
        },
        {
          id: 15,
          name: 'Marmoset',
          assemblies: ['calJac3'],
          children: [
            {
              name: 'calJac3',
              children: [
                {
                  name: 'calJac3tohg19',
                  comparison: 'calJac3tohg19',
                  value: 338,
                  label:
                    'Blastz using calJac3 as reference and human hg19 as query',
                  querygenome: 'hg19',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/calJac3/calJac3_hg19.gz',
                },
              ],
            },
          ],
          thumbnail: 'https://vizhub.wustl.edu/public/calJac3/Marmoset.png',
        },
        {
          id: 16,
          name: 'Gorilla',
          assemblies: ['gorGor3', 'gorGor4'],
          children: [
            {
              name: 'gorGor3',
              children: [
                {
                  name: 'gorGor3tohg19',
                  comparison: 'gorGor3tohg19',
                  value: 338,
                  label: 'Blastz using gorGor3 as reference and hg19 as query',
                  querygenome: 'hg19',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/gorGor3/gorGor3_hg19.gz',
                },
              ],
            },
            {
              name: 'gorGor4',
              children: [],
            },
          ],
          thumbnail: 'https://vizhub.wustl.edu/public/gorGor3/Gorilla.png',
        },
        {
          id: 17,
          name: 'Baboon',
          assemblies: ['papAnu2'],
          children: [
            {
              name: 'papAnu2',
              children: [
                {
                  name: 'papAnu2tohg19',
                  comparison: 'papAnu2tohg19',
                  value: 338,
                  label: 'Query human hg19 to papAnu2 blastz',
                  querygenome: 'hg19',
                  filetype: 'genomealign',
                  url: 'https://vizhub.wustl.edu/public/papAnu2/papAnu2_hg19.gz',
                },
              ],
            },
          ],
          thumbnail: 'https://vizhub.wustl.edu/public/papAnu2/Baboon.png',
        },
      ],
    };

    // Set the dimensions and margins of the diagram
    var margin = { top: 20, right: 90, bottom: 30, left: 90 },
      width = 1460 - margin.left - margin.right,
      height = 960 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3
      .select(container)
      .append('svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var i = 0,
      duration = 750,
      root;

    // declares a tree layout and assigns the size
    var treemap = d3.tree().size([height, width]);

    // Assigns parent, children, height, depth
    root = d3.hierarchy(treeData, function (d) {
      return d.children;
    });
    root.x0 = height / 2;
    root.y0 = 0;

    // Collapse after the second level
    root.children.forEach(collapse);

    update(root);

    // Collapse the node and all it's children
    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    function update(source) {
      // Assigns the x and y position for the nodes
      var treeData = treemap(root);

      // Compute the new tree layout.
      var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

      // Normalize for fixed-depth.
      nodes.forEach(function (d) {
        d.y = d.depth * 150;
      });

      // ****************** Nodes section ***************************

      // Update the nodes...
      var node = svg.selectAll('g.node').data(nodes, function (d) {
        return d.id || (d.id = ++i);
      });

      // Enter any new modes at the parent's previous position.
      var nodeEnter = node
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', function (d) {
          return 'translate(' + source.y0 + ',' + source.x0 + ')';
        })
        .on('click', click);

      // Add Circle for the nodes
      nodeEnter
        .append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style('fill', function (d) {
          return d._children ? 'lightsteelblue' : '#fff';
        });

      // Add labels for the nodes
      nodeEnter
        .append('text')
        .attr('dy', '.35em')
        .attr('x', function (d) {
          return d.children || d._children ? -13 : 13;
        })
        .attr('text-anchor', function (d) {
          return d.children || d._children ? 'end' : 'start';
        })
        .text(function (d) {
          return d.data.name;
        });

      // UPDATE
      var nodeUpdate = nodeEnter.merge(node);

      // Transition to the proper position for the node
      nodeUpdate
        .transition()
        .duration(duration)
        .attr('transform', function (d) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });

      // Update the node attributes and style
      nodeUpdate
        .select('circle.node')
        .attr('r', 10)
        .style('fill', function (d) {
          return d._children ? 'lightsteelblue' : '#fff';
        })
        .attr('cursor', 'pointer');

      // Remove any exiting nodes
      var nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr('transform', function (d) {
          return 'translate(' + source.y + ',' + source.x + ')';
        })
        .remove();

      // On exit reduce the node circles size to 0
      nodeExit.select('circle').attr('r', 1e-6);

      // On exit reduce the opacity of text labels
      nodeExit.select('text').style('fill-opacity', 1e-6);

      // ****************** links section ***************************

      // Update the links...
      var link = svg.selectAll('path.link').data(links, function (d) {
        return d.id;
      });

      // Enter any new links at the parent's previous position.
      var linkEnter = link
        .enter()
        .insert('path', 'g')
        .attr('class', 'link')
        .attr('d', function (d) {
          var o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        });

      // UPDATE
      var linkUpdate = linkEnter.merge(link);

      // Transition back to the parent element position
      linkUpdate
        .transition()
        .duration(duration)
        .attr('d', function (d) {
          return diagonal(d, d.parent);
        });

      // Remove any exiting links
      var linkExit = link
        .exit()
        .transition()
        .duration(duration)
        .attr('d', function (d) {
          var o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .remove();

      // Store the old positions for transition.
      nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Creates a curved (diagonal) path from parent to the child nodes
      function diagonal(s, d) {
        path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;

        return path;
      }

      var dispatch1 = d3.dispatch('start');

      dispatch1.on('start', function (input) {
        if (selection.includes(input)) {
          d3.select(this).attr('fill', '');
          selection = selection.filter((d) => d !== input);
        } else {
          selection.push(input);
          d3.select(this).attr('fill', 'red');
        }
      });

      // Toggle children on click.
      function click(event, d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          if ((d.children === undefined || !d.children) && d.data.comparison) {
            dispatch1.call('start', this, d.data.name);
          }
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }
    }
  }
</script>

<div id="tree" class="h-screen bg-white text-gray-800">
  Hello
  <div bind:this={container} />
</div>

<style global>
  .node circle {
    fill: #fff;
    stroke: steelblue;
    stroke-width: 3px;
  }

  .node text {
    font: 12px sans-serif;
  }

  .link {
    fill: none;
    stroke: #ccc;
    stroke-width: 2px;
  }
</style>
