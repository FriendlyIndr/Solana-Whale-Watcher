        // DOM Elements
        const walletInput = document.getElementById('walletInput');
        const searchForm = document.getElementById('searchForm');
        const suggestions = document.getElementById('suggestions');
        const feedCards = document.getElementById('feedCards');
        const exploreFeed = document.getElementById('exploreFeed');
        const whaleModal = document.getElementById('whaleModal');
        const closeModal = document.getElementById('closeModal');
        const modalAddress = document.getElementById('modalAddress');
        const walletBalance = document.getElementById('walletBalance');
        const txCount = document.getElementById('txCount');
        const whaleRank = document.getElementById('whaleRank');
        const tokenGrid = document.getElementById('tokenGrid');
        const transactionList = document.getElementById('transactionList');
        const whaleList = document.getElementById('whaleList');
        const soundToggle = document.getElementById('soundToggle');

        // Sample Data for Demo
        const whaleAddresses = [
            "4ndrwRCJbVUqQGmvK9r451ixTEzRRMbU8nZ3DqWi7Ez",
            "8JRNHBNsp6uUCrRNQTu5vnBRe3TdYgP2GqPwHH6prLg4",
            "5GZL2TZ35KnqwiBFeiQcMqrAaCvG6QH8mgJCVVMmMFLG",
            "HhJWvzXzYDJZ4CQjPkuPx5h3QUZ9PEn6aKoupWsn6S5W",
            "9rQU7JMdjWxsVbzPGnUXBQzNWicKLDjyfHwELkxztHyP"
        ];

        const actionTypes = ["swap", "transfer", "stake", "nft"];
        const tokens = ["SOL", "USDC", "BONK", "JUP", "ORCA", "RAY"];
        
        // Sound effects
        let soundEnabled = false;
        const whaleSound = new Audio();
        whaleSound.src = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADpgCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL////////////////////////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQCkAAAAAAAAAOmxmqomgAAAAAAAAAAAAAAAAAAAP/7UEAAAAHUAFp+AAAIgIALT8AAARYAH+MAAABFWQP8YAAAABAA0Yld/H4AF3egggBAEjOm0y/CQl6QQa5IIASIIAQFjEEDOTn//50QQA2JFGjRiTa//+dXYxLGJNGjRo0Z0f//zo0a5IIcFYlDggiVMQU1FMy45OS4zVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSRAoAAGjBfW9mJAAPQDGn7MSAAhkCtr+eouBDQGbX89RcFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS4zVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            // Generate initial feed data
            generateInitialFeed();
            
            // Initialize chart
            initChart();
            
            // Populate top whales list
            populateTopWhales();
            
            // Set up real-time data simulation
            setInterval(addNewWhaleActivity, 8000);
            
            // Add a quick one for demo impact
            setTimeout(addNewWhaleActivity, 2000);
        });

        // Event Listeners
        exploreFeed.addEventListener('click', () => {
            document.getElementById('whaleFeed').scrollIntoView({ behavior: 'smooth' });
        });

        walletInput.addEventListener('focus', () => {
            suggestions.style.display = 'block';
        });

        walletInput.addEventListener('blur', () => {
            // Delayed hide to allow for clicks on suggestions
            setTimeout(() => {
                suggestions.style.display = 'none';
            }, 200);
        });

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const walletAddress = walletInput.value.trim();
            if (walletAddress) {
                showWalletDetails(walletAddress);
                walletInput.value = '';
            }
        });

        document.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const address = item.getAttribute('data-address');
                walletInput.value = address;
                showWalletDetails(address);
                walletInput.value = '';
            });
        });

        closeModal.addEventListener('click', () => {
            whaleModal.style.display = 'none';
        });

        whaleModal.addEventListener('click', (e) => {
            if (e.target === whaleModal) {
                whaleModal.style.display = 'none';
            }
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateChart(btn.getAttribute('data-time'));
            });
        });

        soundToggle.addEventListener('click', () => {
            soundEnabled = !soundEnabled;
            soundToggle.innerHTML = soundEnabled ? 
                '<i class="fas fa-volume-up"></i>' : 
                '<i class="fas fa-volume-mute"></i>';
            
            soundToggle.classList.toggle('active', soundEnabled);
            
            // Play a test sound when enabled
            if (soundEnabled) {
                showNotification("Sound alerts enabled", "You'll hear alerts for major whale movements.");
            }
        });

        // Functions
        function generateInitialFeed() {
            // Clear existing cards
            feedCards.innerHTML = '';
            
            // Generate 6 random whale activity cards
            for (let i = 0; i < 6; i++) {
                const card = createWhaleActivityCard(generateRandomActivity(), getRandomTimeAgo());
                feedCards.appendChild(card);
            }
        }

        function createWhaleActivityCard(activity, timeAgo) {
            const card = document.createElement('div');
            card.className = 'whale-card';
            
            // Check if we need verified badge
            const isVerified = Math.random() > 0.7;
            const verifiedBadge = isVerified ? '<i class="fas fa-check-circle verify-icon"></i>' : '';
            
            // Create action type badge
            const actionType = activity.type;
            const actionClass = `action-${actionType}`;
            
            // Prepare token icons
            let tokenIconHTML = '';
            if (activity.tokens) {
                activity.tokens.forEach(token => {
                    tokenIconHTML += `
                        <div class="token-icon">${token.substring(0, 1)}</div>
                    `;
                });
            }
            
            card.innerHTML = `
                <div class="card-header">
                    <div class="wallet-address">
                        <i class="fas fa-wallet"></i>
                        ${shortenAddress(activity.wallet)}
                        ${verifiedBadge}
                    </div>
                    <div class="time-ago">
                        <i class="far fa-clock"></i>
                        ${timeAgo}
                    </div>
                </div>
                <div class="card-body">
                    <div class="action">
                        <span class="action-type ${actionClass}">${actionType}</span>
                        ${activity.action}
                    </div>
                    <div class="value">${activity.value}</div>
                </div>
                <div class="card-footer">
                    <div class="token-info">
                        ${tokenIconHTML}
                    </div>
                    <a class="details-link" data-address="${activity.wallet}">
                        View details <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
            
            // Add event listener to the details link
            setTimeout(() => {
                const detailsLink = card.querySelector('.details-link');
                detailsLink.addEventListener('click', () => {
                    showWalletDetails(detailsLink.getAttribute('data-address'));
                });
            }, 0);
            
            return card;
        }

        function generateRandomActivity() {
            const walletIndex = Math.floor(Math.random() * whaleAddresses.length);
            const wallet = whaleAddresses[walletIndex];
            const typeIndex = Math.floor(Math.random() * actionTypes.length);
            const type = actionTypes[typeIndex];
            
            let action, value, tokens;
            
            switch(type) {
                case 'swap':
                    const fromToken = tokens = getRandomTokens(1)[0];
                    const toToken = getRandomTokens(1, [fromToken])[0];
                    const amount = (Math.floor(Math.random() * 10000) + 100).toLocaleString();
                    action = `Swapped ${amount} ${fromToken} for ${toToken}`;
                    value = `$${(Math.floor(Math.random() * 5000000) + 100000).toLocaleString()}`;
                    tokens = [fromToken, toToken];
                    break;
                case 'transfer':
                    const transferToken = getRandomTokens(1)[0];
                    const transferAmount = (Math.floor(Math.random() * 50000) + 1000).toLocaleString();
                    action = `Transferred ${transferAmount} ${transferToken}`;
                    value = `$${(Math.floor(Math.random() * 2000000) + 50000).toLocaleString()}`;
                    tokens = [transferToken];
                    break;
                case 'stake':
                    const stakeAmount = (Math.floor(Math.random() * 100000) + 10000).toLocaleString();
                    action = `Staked ${stakeAmount} SOL`;
                    value = `$${(Math.floor(Math.random() * 1500000) + 200000).toLocaleString()}`;
                    tokens = ['SOL'];
                    break;
                case 'nft':
                    const collections = ['DeGods', 'y00ts', 'Claynosaurz', 'Solana Monkey'];
                    const collection = collections[Math.floor(Math.random() * collections.length)];
                    action = `Purchased ${collection} #${Math.floor(Math.random() * 10000)}`;
                    value = `$${(Math.floor(Math.random() * 500000) + 20000).toLocaleString()}`;
                    tokens = ['SOL'];
                    break;
            }
            
            return {
                wallet,
                type,
                action,
                value,
                tokens
            };
        }

        function getRandomTokens(count, exclude = []) {
            const availableTokens = tokens.filter(token => !exclude.includes(token));
            const result = [];
            
            for (let i = 0; i < count; i++) {
                const index = Math.floor(Math.random() * availableTokens.length);
                result.push(availableTokens[index]);
                availableTokens.splice(index, 1);
                
                if (availableTokens.length === 0) break;
            }
            
            return result;
        }

        function getRandomTimeAgo() {
            const units = ['seconds', 'minutes', 'hours'];
            const unit = units[Math.floor(Math.random() * 2)]; // Biased towards recent
            const value = Math.floor(Math.random() * (unit === 'seconds' ? 50 : unit === 'minutes' ? 30 : 2)) + 1;
            return `${value} ${value === 1 ? unit.slice(0, -1) : unit} ago`;
        }

        function shortenAddress(address) {
            return address.substring(0, 4) + '...' + address.substring(address.length - 4);
        }

        function addNewWhaleActivity() {
            const activity = generateRandomActivity();
            const card = createWhaleActivityCard(activity, 'Just now');
            card.classList.add('new-activity');
            
            // Insert at the beginning
            feedCards.insertBefore(card, feedCards.firstChild);
            
            // Remove the last card if we have more than 12
            if (feedCards.children.length > 12) {
                feedCards.removeChild(feedCards.lastChild);
            }
            
            // Play sound if it's a big transaction and sound is enabled
            if (soundEnabled && activity.value.replace(/[^0-9]/g, '') > 500000) {
                whaleSound.play();
                showNotification("Major Whale Movement", activity.action, activity.value);
            }
            
            // Update top whales list occasionally
            if (Math.random() > 0.7) {
                populateTopWhales();
            }
        }

        function showWalletDetails(address) {
            modalAddress.textContent = shortenAddress(address);
            
            // Generate random data for the wallet details
            walletBalance.textContent = `$${(Math.floor(Math.random() * 50000000) + 1000000).toLocaleString()}`;
            txCount.textContent = Math.floor(Math.random() * 500) + 50;
            whaleRank.textContent = `#${Math.floor(Math.random() * 20) + 1}`;
            
            // Generate token holdings
            generateTokenHoldings();
            
            // Generate transactions
            generateTransactions();
            
            // Show modal
            whaleModal.style.display = 'flex';
        }

        function generateTokenHoldings() {
            tokenGrid.innerHTML = '';
            
            const tokenCount = Math.floor(Math.random() * 4) + 3; // 3-6 tokens
            const selectedTokens = getRandomTokens(tokenCount);
            
            selectedTokens.forEach(token => {
                const amount = (Math.floor(Math.random() * 1000000) + 10000).toLocaleString();
                const value = (Math.floor(Math.random() * 10000000) + 100000).toLocaleString();
                
                const tokenCard = document.createElement('div');
                tokenCard.className = 'token-card';
                tokenCard.innerHTML = `
                    <div class="token-header">
                        <div class="token-icon">${token.substring(0, 1)}</div>
                        <div class="token-name">${token}</div>
                    </div>
                    <div class="token-amount">${amount} ${token}</div>
                    <div class="token-value">$${value}</div>
                `;
                
                tokenGrid.appendChild(tokenCard);
            });
        }

        function generateTransactions() {
            transactionList.innerHTML = '';
            
            const txCount = Math.floor(Math.random() * 3) + 3; // 3-5 transactions
            
            for (let i = 0; i < txCount; i++) {
                const activity = generateRandomActivity();
                const timeAgo = getRandomTimeAgo();
                
                const txItem = document.createElement('div');
                txItem.className = 'transaction-item';
                
                txItem.innerHTML = `
                    <div class="transaction-left">
                        <div class="transaction-icon icon-${activity.type}">
                            <i class="fas fa-${activity.type === 'swap' ? 'exchange-alt' : 
                                               activity.type === 'transfer' ? 'paper-plane' : 
                                               activity.type === 'stake' ? 'lock' : 'image'}"></i>
                        </div>
                        <div class="transaction-details">
                            <div class="transaction-type">${activity.action}</div>
                            <div class="transaction-date">${timeAgo}</div>
                        </div>
                    </div>
                    <div class="transaction-right">
                        <div class="transaction-amount">${activity.value}</div>
                        <div class="transaction-value">≈ ${activity.tokens.join(', ')}</div>
                    </div>
                `;
                
                transactionList.appendChild(txItem);
            }
        }

        function populateTopWhales() {
            whaleList.innerHTML = '';
            
            // Create a copy and shuffle
            const shuffledWhales = [...whaleAddresses];
            for (let i = shuffledWhales.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledWhales[i], shuffledWhales[j]] = [shuffledWhales[j], shuffledWhales[i]];
            }
            
            // Take first 5
            shuffledWhales.slice(0, 5).forEach((whale, index) => {
                const volume = `$${(Math.floor(Math.random() * 10000000) + 1000000).toLocaleString()}`;
                
                const whaleItem = document.createElement('div');
                whaleItem.className = 'whale-item';
                whaleItem.innerHTML = `
                    <div class="whale-rank">
                        <div class="rank-number">${index + 1}</div>
                        <div class="rank-address">${shortenAddress(whale)}</div>
                    </div>
                    <div class="whale-volume">${volume}</div>
                `;
                
                // Add click event to show details
                whaleItem.addEventListener('click', () => {
                    showWalletDetails(whale);
                });
                
                whaleList.appendChild(whaleItem);
            });
        }       

        function initChart() {
            const canvas = document.getElementById('volumeChart');
            console.log("Canvas:", canvas); // ✅ Add this line
        
            const ctx = canvas.getContext('2d');
        
            // Destroy previous chart if it exists
            if (window.volumeChart instanceof Chart) {
                window.volumeChart.destroy();
            }            
        
            // Clean hourly labels
            const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
        
            // Generate VALID mock data (range: 60M–100M)
            const data = Array.from({ length: 24 }, () => {
                const val = Math.floor(Math.random() * 40) + 60;
                return val;
            });
        
            // Double-check for NaN values
            const cleanData = data.map(v => (typeof v === 'number' && !isNaN(v)) ? v : 0);
            console.log("Chart Data (clean):", cleanData);
        
            // Create chart
            window.volumeChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: hours,
                    datasets: [{
                        label: 'Volume (millions USD)',
                        data: cleanData,
                        backgroundColor: 'rgba(0, 194, 255, 0.2)',
                        borderColor: 'rgba(0, 194, 255, 1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: 'rgba(0, 194, 255, 1)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 1,
                        pointRadius: 3,
                        pointHoverRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(13, 11, 30, 0.9)',
                            titleColor: '#fff',
                            bodyColor: '#cbd5e1',
                            borderColor: '#00c2ff',
                            borderWidth: 1,
                            padding: 10,
                            cornerRadius: 6,
                            displayColors: false
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        },
                        y: {
                            min: 50,      // fixed range
                            max: 120,     // fixed range
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)',
                                callback: function(value) {
                                    return '$' + value + 'M';
                                }
                            }
                        }
                    }
                }
            });
        }
        

// Function to update the chart
function updateChart(timeframe) {
    // Generate new data based on the selected timeframe
    let labels, data;
    
    switch(timeframe) {
        case '1h':
            labels = Array.from({ length: 12 }, (_, i) => `${i * 5}m`);
            data = Array.from({ length: 12 }, () => Math.floor(Math.random() * 20) + 5);
            break;
        case '4h':
            labels = Array.from({ length: 12 }, (_, i) => `${i * 20}m`);
            data = Array.from({ length: 12 }, () => Math.floor(Math.random() * 30) + 10);
            break;
        case '7d':
            labels = Array.from({ length: 7 }, (_, i) => `Day ${i+1}`);
            data = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100) + 20);
            break;
        case '24h':
        default:
            labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
            data = Array.from({ length: 24 }, () => Math.floor(Math.random() * 50) + 10);
            break;
    }
    
    // Update chart data
    window.volumeChart.data.labels = labels;
    window.volumeChart.data.datasets[0].data = data;
    window.volumeChart.update();
    window.volumeChart.resize();
}

// Function to show notifications
function showNotification(title, message, value = '') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    notification.innerHTML = `
        <div class="notification-icon">🐳</div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
            ${value ? `<div class="notification-value">${value}</div>` : ''}
        </div>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after animation completes
    setTimeout(() => {
        notification.remove();
    }, 5500);
}

// Simulate WebSocket connection for real-time data
function simulateWebSocketConnection() {
    console.log('WebSocket connection simulated for Whale Watch');
    
    // Show initial connection notification
    showNotification(
        'Connected to Solana Network', 
        'Tracking whale movements in real-time'
    );
}

// Initialize WebSocket simulation
simulateWebSocketConnection();

// Toastify-js custom notification wrapper
function showToast(message, type = 'info') {
    let backgroundColor;
    
    switch(type) {
        case 'success':
            backgroundColor = 'linear-gradient(to right, #10b981, #059669)';
            break;
        case 'error':
            backgroundColor = 'linear-gradient(to right, #ef4444, #dc2626)';
            break;
        case 'warning':
            backgroundColor = 'linear-gradient(to right, #f59e0b, #d97706)';
            break;
        case 'info':
        default:
            backgroundColor = 'linear-gradient(to right, #3b82f6, #2563eb)';
            break;
    }
    
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: backgroundColor,
        stopOnFocus: true
    }).showToast();
}

// Handle mobile menu toggle for small screens
function setupMobileResponsiveness() {
    const mobileBreakpoint = 768;
    
    function adjustLayoutForScreenSize() {
        if (window.innerWidth <= mobileBreakpoint) {
            // Mobile optimizations can be applied here
            // For example, collapsing certain sections by default
        }
    }
    
    window.addEventListener('resize', adjustLayoutForScreenSize);
    adjustLayoutForScreenSize(); // Initial check
}

setupMobileResponsiveness();

// Add whale animation effects for larger transactions
function animateWhaleSplash() {
    const splash = document.createElement('div');
    splash.className = 'whale-splash';
    
    // Position randomly on screen
    splash.style.left = `${Math.random() * 80 + 10}%`;
    splash.style.top = `${Math.random() * 80 + 10}%`;
    
    document.body.appendChild(splash);
    
    // Remove after animation completes
    setTimeout(() => {
        splash.remove();
    }, 2000);
}

// Handle copy address to clipboard
function setupAddressCopy() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.wallet-address') || e.target.closest('.wallet-address')) {
            const address = e.target.textContent.trim();
            
            if (address && address.includes('...')) {
                const fullAddress = whaleAddresses.find(a => a.startsWith(address.split('...')[0]));
                
                if (fullAddress) {
                    navigator.clipboard.writeText(fullAddress)
                        .then(() => {
                            showToast('Address copied to clipboard', 'success');
                        })
                        .catch(err => {
                            console.error('Could not copy text: ', err);
                        });
                }
            }
        }
    });
}

setupAddressCopy();

// Handle sharing functionality
function setupSharing() {
    window.shareWallet = function(address) {
        const shareText = `Check out this whale wallet on Solana: ${address}`;
        const shareUrl = `${window.location.origin}${window.location.pathname}?wallet=${address}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Whale Watch - Solana',
                text: shareText,
                url: shareUrl,
            }).catch(err => {
                console.error('Error sharing:', err);
            });
        } else {
            // Fallback for browsers that don't support the Web Share API
            const dummy = document.createElement('input');
            document.body.appendChild(dummy);
            dummy.value = `${shareText}\n${shareUrl}`;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
            showToast('Share link copied to clipboard', 'success');
        }
    }
    
    // Add share button to modal
    const modalHeader = document.querySelector('.modal-header');
    const shareButton = document.createElement('button');
    shareButton.className = 'share-button';
    shareButton.innerHTML = '<i class="fas fa-share-alt"></i>';
    
    shareButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const address = modalAddress.textContent;
        if (address) {
            window.shareWallet(address);
        }
    });
    
    modalHeader.appendChild(shareButton);
}

setupSharing();

// Check URL for shared wallet
function checkUrlForWallet() {
    const urlParams = new URLSearchParams(window.location.search);
    const wallet = urlParams.get('wallet');
    
    if (wallet) {
        showWalletDetails(wallet);
    }
}

checkUrlForWallet();

// Add keystroke shortcuts for advanced users
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Alt+F to focus search
        if (e.altKey && e.key === 'f') {
            e.preventDefault();
            walletInput.focus();
        }
        
        // Escape to close modal
        if (e.key === 'Escape' && whaleModal.style.display === 'flex') {
            whaleModal.style.display = 'none';
        }
        
        // Alt+S to toggle sound
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            soundToggle.click();
        }
    });
}

setupKeyboardShortcuts();

// Initialize any lazy-loaded resources
function initLazyResources() {
    // Preload common whale assets
    const preloadImages = [
        '/images/whale-splash-1.svg', // These would be actual paths in a real app
        '/images/whale-splash-2.svg'
    ];
    
    // In a real app, you might load these
    // preloadImages.forEach(src => {
    //     const img = new Image();
    //     img.src = src;
    // });
}

// Simulate a network request
async function fetchMockData(endpoint) {
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    
    switch(endpoint) {
        case 'whales/top':
            return whaleAddresses.slice(0, 5).map((address, index) => ({
                address,
                volume: `$${(Math.floor(Math.random() * 10000000) + 1000000).toLocaleString()}`,
                rank: index + 1
            }));
        case 'market/overview':
            return {
                totalVolume: `$${(Math.floor(Math.random() * 1000000000) + 100000000).toLocaleString()}`,
                whalePercentage: (Math.random() * 30 + 40).toFixed(1) + '%',
                activeWhales: Math.floor(Math.random() * 100) + 50
            };
        default:
            return { error: 'Invalid endpoint' };
    }
}

// When page is fully loaded
window.addEventListener('load', async () => {
    // Fetch market overview (simulation)
    try {
        const marketData = await fetchMockData('market/overview');
        // If this was a real app, we would update UI with this data
        console.log('Market data loaded', marketData);
    } catch (err) {
        console.error('Error fetching market data', err);
    }
    
    // Initialize any lazy resources
    initLazyResources();
});