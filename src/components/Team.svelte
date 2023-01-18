<script>
  import TeamMember from './TeamMemberCard.svelte';

  const team = [
    {
      name: 'Xiaoyu Zhuo',
      img: '/assets/img/XiaoyuLarge.jpg',
      role: 'Author, Maintainer',
    },
    {
      name: 'Deepak Purushotham',
      img: '/assets/img/DeepakLarge.jpg',
      role: 'Web Developer',
    },

    {
      name: 'Silas Hsu',
      img: '/assets/img/SilasLarge.jpg',
      role: 'Consultant',
    },
    {
      name: 'Daofeng Li',
      img: '/assets/img/DaofengLarge.jpg',
      role: 'Web Developer',
    },
    {
      name: 'Alan Du',
      img: '/assets/img/AlanLarge.jpg',
      role: 'Researcher',
    },
    {
      name: 'Samuel Chen',
      img: '/assets/img/SamuelLarge.jpg',
      role: 'Research Assistant',
    },

    {
      name: 'Ting Wang',
      img: '/assets/img/TingLarge.jpg',
      role: 'Principal Investigator',
    },
  ];
</script>

<div>
  <main>
    <div class="relative py-16 flex content-center items-center justify-center">
      <section class="">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Team members</h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                Some description can go here.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            {#each team as member}
              <TeamMember entry={member} />
            {/each}
          </div>
        </div>
      </section>
    </div>
  </main>
</div>
