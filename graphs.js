// JavaScript for Youth Training Chart
document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const TARGET = 1975;
    const chartId = 'youth-training-chart';
    
    // Data for the chart
    const data = [
      { year: '2023', quarter: 'Q1', men: 4, women: 5, total: 9 },
      { year: '2023', quarter: 'Q2', men: 0, women: 0, total: 0 },
      { year: '2023', quarter: 'Q3', men: 0, women: 0, total: 0 },
      { year: '2023', quarter: 'Q4', men: 0, women: 0, total: 0 },
      { year: '2024', quarter: 'Q1', men: 0, women: 0, total: 0 },
      { year: '2024', quarter: 'Q2', men: 0, women: 0, total: 0 },
      { year: '2024', quarter: 'Q3', men: 0, women: 0, total: 0 },
      { year: '2024', quarter: 'Q4', men: 0, women: 0, total: 0 },
      { year: '2025', quarter: 'Q1', men: 0, women: 0, total: 0 },
      { year: '2025', quarter: 'Q2', men: 0, women: 0, total: 0 },
      { year: '2025', quarter: 'Q3', men: 0, women: 0, total: 0 },
      { year: '2025', quarter: 'Q4', men: 0, women: 0, total: 0 },
      { year: '2026', quarter: 'Q1', men: 0, women: 0, total: 0 },
      { year: '2026', quarter: 'Q2', men: 0, women: 0, total: 0 },
      { year: '2026', quarter: 'Q3', men: 0, women: 0, total: 0 },
      { year: '2026', quarter: 'Q4', men: 0, women: 0, total: 0 },
      { year: '2027', quarter: 'Q1', men: 0, women: 0, total: 0 },
      { year: '2027', quarter: 'Q2', men: 0, women: 0, total: 0 },
      { year: '2027', quarter: 'Q3', men: 0, women: 0, total: 0 },
      { year: '2027', quarter: 'Q4', men: 0, women: 0, total: 0 },
      { year: '2028', quarter: 'Q1', men: 0, women: 0, total: 0 },
      { year: '2028', quarter: 'Q2', men: 0, women: 0, total: 0 },
      { year: '2028', quarter: 'Q3', men: 0, women: 0, total: 0 },
      { year: '2028', quarter: 'Q4', men: 0, women: 0, total: 0 }
    ];
    
    // Find chart container
    const chartContainer = document.getElementById(chartId);
    if (!chartContainer) return;
    
    const chartArea = chartContainer.querySelector('.chart-area');
    if (!chartArea) return;
    
    // Calculate max value for Y-axis (with some padding)
    const maxValue = Math.max(TARGET * 1.1, 2000);
    
    // Create Y-axis
    const yAxis = document.createElement('div');
    yAxis.className = 'y-axis';
    
    const yPoints = 6; // Number of points on y-axis
    for (let i = 0; i < yPoints; i++) {
      const value = Math.round((maxValue / (yPoints - 1)) * (yPoints - 1 - i));
      const yAxisLabel = document.createElement('div');
      yAxisLabel.className = 'y-axis-label';
      yAxisLabel.textContent = value.toLocaleString();
      yAxis.appendChild(yAxisLabel);
    }
    chartArea.appendChild(yAxis);
    
    // Create grid container
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    
    // Create grid lines
    const gridLines = document.createElement('div');
    gridLines.className = 'grid-lines';
    
    for (let i = 0; i < yPoints; i++) {
      const gridLine = document.createElement('div');
      gridLine.className = 'grid-line';
      gridLines.appendChild(gridLine);
    }
    gridContainer.appendChild(gridLines);
    
    // Create target line
    const targetPosition = (1 - TARGET / maxValue) * 100;
    const targetLine = document.createElement('div');
    targetLine.className = 'target-line';
    targetLine.style.top = `${targetPosition}%`;
    
    const targetLabel = document.createElement('div');
    targetLabel.className = 'target-label';
    targetLabel.textContent = `Target: ${TARGET.toLocaleString()}`;
    targetLine.appendChild(targetLabel);
    
    gridContainer.appendChild(targetLine);
    chartArea.appendChild(gridContainer);
    
    // Create X-axis
    const xAxis = document.createElement('div');
    xAxis.className = 'x-axis';
    
    // Group data by year
    const years = [...new Set(data.map(item => item.year))];
    years.forEach(year => {
      const yearQuarters = data.filter(item => item.year === year);
      
      yearQuarters.forEach(quarter => {
        const xLabel = document.createElement('div');
        xLabel.className = 'x-label';
        xLabel.textContent = quarter.quarter;
        xAxis.appendChild(xLabel);
      });
    });
    
    chartArea.appendChild(xAxis);
    
    // Create bars container
    const barsContainer = document.createElement('div');
    barsContainer.className = 'bars-container';
    
    // Group bars by year
    const yearGroups = {};
    data.forEach(item => {
      if (!yearGroups[item.year]) {
        yearGroups[item.year] = [];
      }
      yearGroups[item.year].push(item);
    });
    
    // Create bar groups for each year
    Object.keys(yearGroups).forEach(year => {
      const yearGroup = document.createElement('div');
      yearGroup.className = 'year-group';
      
      const yearQuarters = document.createElement('div');
      yearQuarters.className = 'year-quarters';
      
      yearGroups[year].forEach(quarter => {
        const quarterGroup = document.createElement('div');
        quarterGroup.className = 'quarter-group';
        
        // Men bar
        const barMen = document.createElement('div');
        barMen.className = 'bar bar-men';
        const menHeight = (quarter.men / maxValue) * 100;
        barMen.style.height = `${menHeight}%`;
        
        // Only show value if it's not zero
        if (quarter.men > 0) {
          const barValueMen = document.createElement('div');
          barValueMen.className = 'bar-value';
          barValueMen.textContent = quarter.men;
          barMen.appendChild(barValueMen);
        }
        
        // Women bar
        const barWomen = document.createElement('div');
        barWomen.className = 'bar bar-women';
        const womenHeight = (quarter.women / maxValue) * 100;
        barWomen.style.height = `${womenHeight}%`;
        
        // Only show value if it's not zero
        if (quarter.women > 0) {
          const barValueWomen = document.createElement('div');
          barValueWomen.className = 'bar-value';
          barValueWomen.textContent = quarter.women;
          barWomen.appendChild(barValueWomen);
        }
        
        // Total bar
        const barTotal = document.createElement('div');
        barTotal.className = 'bar bar-total';
        const totalHeight = (quarter.total / maxValue) * 100;
        barTotal.style.height = `${totalHeight}%`;
        
        // Only show value if it's not zero
        if (quarter.total > 0) {
          const barValueTotal = document.createElement('div');
          barValueTotal.className = 'bar-value';
          barValueTotal.textContent = quarter.total;
          barTotal.appendChild(barValueTotal);
        }
        
        quarterGroup.appendChild(barMen);
        quarterGroup.appendChild(barWomen);
        quarterGroup.appendChild(barTotal);
        
        yearQuarters.appendChild(quarterGroup);
      });
      
      yearGroup.appendChild(yearQuarters);
      
      // Year label
      const yearLabel = document.createElement('div');
      yearLabel.className = 'year-label';
      yearLabel.textContent = year;
      yearGroup.appendChild(yearLabel);
      
      barsContainer.appendChild(yearGroup);
    });
    
    gridContainer.appendChild(barsContainer);
    
    // Add animation effect
    setTimeout(() => {
      document.querySelectorAll('.bar').forEach((bar, index) => {
        const originalHeight = bar.style.height;
        bar.style.height = '0';
        setTimeout(() => {
          bar.style.transition = 'height 0.8s ease-out';
          bar.style.height = originalHeight;
        }, index * 20); // Staggered animation
      });
    }, 300);
  });