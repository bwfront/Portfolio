import { Component } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.sass'],
})
export class MyworkComponent {
  projects = [
    {
      title: 'Join',
      livetest: 'https://bennetwitczak.com/join',
      img: 'join.png',
      devLanguage: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System, Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'https://github.com/bwfront/Join',
    },
    {
      title: 'Sharkie',
      livetest: 'https://bennetwitczak.com/sharkie',
      img: 'sharkie.png',
      devLanguage: 'JavaScript | HTML | CSS',
      description:
        'Navigate the underwater world as Sharkie. Overcome enemies, avoid dangers, and collect coins in a straightforward aquatic adventure. Face the endboss in a simple battle of wit and reflexes.',
      github: 'https://github.com/bwfront/Sharkie',
    },
    {
      title: 'DABubble',
      livetest: 'https://dabubble-1a43e.web.app/',
      img: 'dabubble.png',
      devLanguage: 'Angular | TypeScript | HTML | SASS(CSS)',
      description:
        'A user-friendly Slack clone app enabling easy team communication and collaboration through organized chats and channels.',
      github: 'https://github.com/bwfront/DABubble',
    },
  ];
}
