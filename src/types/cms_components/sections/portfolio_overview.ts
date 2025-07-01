import { PortfolioOverviewItem } from "../types/portfolio_overview_item";

export interface PortfolioOverview {
    title?: string | null;
    items: PortfolioOverviewItem[];
}