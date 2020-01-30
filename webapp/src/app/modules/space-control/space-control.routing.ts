import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ChartVisitorsComponent } from '../common-components/components/chart-visitors/chart-visitors.component';
import { ChartWeekdayHeatmapComponent } from '../common-components/components/chart-weekday-heatmap/chart-weekday-heatmap.component';
import { PresenceComponent } from './components/presence/presence.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'presence',
        pathMatch: 'full',
    },
    {
        path: 'statistics',
        component: StatisticsComponent,
        data: {
            sidenav: true
        },
        children: [
            {
                path: 'all_visitors',
                component: ChartVisitorsComponent,
            }, {
                path: 'attendance_times',
                component: ChartWeekdayHeatmapComponent
            }
        ]
    },
    {
        path: 'presence',
        component: PresenceComponent
    },

];

export const SpaceControlModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);