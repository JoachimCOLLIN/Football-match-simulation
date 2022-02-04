export class EndSeason
{
    constructor(
        public team: string,
        public points: number,
        public wins: number,
        public draws: number,
        public losses: number,
        public goals_scored: number,
        public goals_conceded: number,

    ) {}
}
