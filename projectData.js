window.projectDetails = {
    FraudDetection: {
        title: "Real-Time Fraud Detection System",
        content: `
            <div style="padding: 40px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; color: #f8fafc; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;">
                <h1 style="font-size: 2.5rem; font-weight: 700; margin: 0 0 30px 0; color: #60a5fa; text-shadow: 0 2px 4px rgba(96, 165, 250, 0.3);">
                    Real-Time Fraud Detection System
                </h1>
                
                <div style="margin: 30px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
                    <img src="https://github.com/PablooDario/Real-Time-Fraud-Detector/blob/main/imgs/Dashboard.png?raw=true" 
                        alt="Fraud Detection Dashboard" 
                        style="width: 100%; height: 350px; object-fit: cover; display: block;">
                </div>
                
                <div style="background: rgba(15, 23, 42, 0.6); padding: 30px; border-radius: 12px; margin: 40px 0; border-left: 4px solid #60a5fa;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 20px 0; color: #e2e8f0; display: flex; align-items: center;">
                        <span style="background: #60a5fa; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></span>
                        Project Overview
                    </h2>
                    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0; color: #cbd5e1;">
                        A fully containerized pipeline that simulates financial transactions, detects fraud in real-time, 
                        and visualizes flagged activity on a live dashboard. Demonstrates how streaming, machine learning, 
                        and caching layers combine to handle mission-critical fraud detection with ultra-low latency.
                    </p>
                </div>
                
                <div style="margin: 50px 0;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 25px 0; color: #e2e8f0; display: flex; align-items: center;">
                        <span style="background: #34d399; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></span>
                        Key Features
                    </h2>
                    <div style="display: grid; gap: 16px;">
                        <div style="background: rgba(52, 211, 153, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #34d399;">
                            <strong style="color: #34d399; font-size: 1.1rem;">Realistic Data Simulation:</strong>
                            <span style="color: #cbd5e1; margin-left: 8px;">Transaction streams generated with Faker library</span>
                        </div>
                        <div style="background: rgba(168, 85, 247, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #a855f7;">
                            <strong style="color: #a855f7; font-size: 1.1rem;">Advanced ML Model:</strong>
                            <span style="color: #cbd5e1; margin-left: 8px;">Optimized XGBoost classifier served with FastAPI + ONNX Runtime</span>
                        </div>
                        <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #3b82f6;">
                            <strong style="color: #3b82f6; font-size: 1.1rem;">Streaming Pipeline:</strong>
                            <span style="color: #cbd5e1; margin-left: 8px;">Kafka producer/consumer setup for real-time scoring</span>
                        </div>
                        <div style="background: rgba(245, 101, 101, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #f56565;">
                            <strong style="color: #f56565; font-size: 1.1rem;">Redis Caching:</strong>
                            <span style="color: #cbd5e1; margin-left: 8px;">High-performance caching for instant transaction queries</span>
                        </div>
                        <div style="background: rgba(251, 191, 36, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #fbbf24;">
                            <strong style="color: #fbbf24; font-size: 1.1rem;">Live Dashboard:</strong>
                            <span style="color: #cbd5e1; margin-left: 8px;">Interactive UI that maps transactions and flags suspected fraud</span>
                        </div>
                    </div>
                </div>
                
                <div style="margin: 50px 0;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 30px 0; color: #e2e8f0; display: flex; align-items: center;">
                        <span style="background: #f59e0b; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></span>
                        Technical Architecture
                    </h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px;">
                        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 25px; border-radius: 12px; border: 1px solid #475569; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);">
                            <h3 style="color: #60a5fa; font-size: 1.3rem; font-weight: 600; margin: 0 0 20px 0; display: flex; align-items: center;">
                                <span style="background: #60a5fa; width: 6px; height: 6px; border-radius: 50%; margin-right: 10px;"></span>
                                Backend & ML
                            </h3>
                            <div style="space-y: 8px;">
                                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #34d399; margin-right: 8px;">▸</span>
                                    <span style="color: #e2e8f0;">Python with FastAPI</span>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #34d399; margin-right: 8px;">▸</span>
                                    <span style="color: #e2e8f0;">Pandas & Scikit-learn</span>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #34d399; margin-right: 8px;">▸</span>
                                    <span style="color: #e2e8f0;">XGBoost for fraud detection</span>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #34d399; margin-right: 8px;">▸</span>
                                    <span style="color: #e2e8f0;">ONNX Runtime for inference</span>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #34d399; margin-right: 8px;">▸</span>
                                    <span style="color: #e2e8f0;">Redis for caching</span>
                                </div>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 25px; border-radius: 12px; border: 1px solid #475569; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);">
                            <h3 style="color: #a855f7; font-size: 1.3rem; font-weight: 600; margin: 0 0 20px 0; display: flex; align-items: center;">
                                <span style="background: #a855f7; width: 6px; height: 6px; border-radius: 50%; margin-right: 10px;"></span>
                                Infrastructure & Deployment
                            </h3>
                            <div style="space-y: 8px;">
                                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #a855f7; margin-right: 8px;">▸</span>
                                    <span style="color: #e2e8f0;">Apache Kafka for streaming</span>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #a855f7; margin-right: 8px;">▸</span>
                                    <span style="color: #e2e8f0;">Docker & Docker Compose</span>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #a855f7; margin-right: 8px;">▸</span>
                                    <span style="color: #e2e8f0;">Containerized model serving</span>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #a855f7; margin-right: 8px;">▸</span>
                                    <span style="color: #e2e8f0;">Real-time dashboard</span>
                                </div>
                                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #a855f7; margin-right: 8px;">▸</span>
                                    <span style="color: #e2e8f0;">Latency monitoring</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(15, 23, 42, 0.8); padding: 35px; border-radius: 12px; margin: 50px 0; border: 1px solid #334155;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 30px 0; color: #e2e8f0; text-align: center;">
                        🎯 Performance Metrics
                    </h2>
                    <p style="text-align: center; color: #94a3b8; margin: 0 0 30px 0; font-size: 1.1rem;">
                        Achieving exceptional fraud detection performance with low-latency response times
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 20px;">
                        <div style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); padding: 25px; border-radius: 10px; text-align: center; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);">
                            <h4 style="color: #fecaca; font-size: 0.9rem; font-weight: 500; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Recall</h4>
                            <p style="font-size: 2.2rem; font-weight: 700; margin: 0; color: #ffffff;">85%</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); padding: 25px; border-radius: 10px; text-align: center; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);">
                            <h4 style="color: #bfdbfe; font-size: 0.9rem; font-weight: 500; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Precision</h4>
                            <p style="font-size: 2.2rem; font-weight: 700; margin: 0; color: #ffffff;">74%</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 25px; border-radius: 10px; text-align: center; box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);">
                            <h4 style="color: #bbf7d0; font-size: 0.9rem; font-weight: 500; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">F1-Score</h4>
                            <p style="font-size: 2.2rem; font-weight: 700; margin: 0; color: #ffffff;">79%</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%); padding: 25px; border-radius: 10px; text-align: center; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);">
                            <h4 style="color: #ddd6fe; font-size: 0.9rem; font-weight: 500; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Accuracy</h4>
                            <p style="font-size: 2.2rem; font-weight: 700; margin: 0; color: #ffffff;">98%</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    ml_algorithms: {
        title: "Machine Learning Algorithms from Scratch",
        content: `
            <div style="padding: 40px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; color: #f8fafc; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;">
                <h1 style="font-size: 2.5rem; font-weight: 700; margin: 0 0 30px 0; color: #34d399; text-shadow: 0 2px 4px rgba(52, 211, 153, 0.3);">
                    Machine Learning Algorithms from Scratch
                </h1>
                
                <div style="margin: 30px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
                    <img src="https://media.licdn.com/dms/image/v2/C4E12AQGU1EIJX474rA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1624258871908?e=2147483647&v=beta&t=7292bXd08eILZQVBDx5uQ8JX8MXb7mcLcscgzwZxWYM" 
                        alt="Machine Learning Algorithms" 
                        style="width: 100%; height: 350px; object-fit: cover; display: block;">
                </div>
                
                <div style="background: rgba(15, 23, 42, 0.6); padding: 30px; border-radius: 12px; margin: 40px 0; border-left: 4px solid #34d399;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 20px 0; color: #e2e8f0; display: flex; align-items: center;">
                        <span style="background: #34d399; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></span>
                        Project Philosophy
                    </h2>
                    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0; color: #cbd5e1;">
                        This repository contains fundamental Machine Learning algorithms implemented from scratch. 
                        The core philosophy is understanding the mathematical foundations and computational mechanics 
                        behind each algorithm, rather than just using pre-built libraries. Every implementation 
                        focuses on clarity, educational value, and deep comprehension of underlying principles.
                    </p>
                </div>
                
                <div style="margin: 50px 0;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 30px 0; color: #e2e8f0; display: flex; align-items: center;">
                        <span style="background: #f59e0b; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></span>
                        Algorithm Categories
                    </h2>
                    
                    <div style="display: grid; gap: 30px;">
                        <!-- Supervised Learning Section -->
                        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; border: 1px solid #475569; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);">
                            <h3 style="color: #60a5fa; font-size: 1.5rem; font-weight: 600; margin: 0 0 25px 0; display: flex; align-items: center;">
                                <span style="background: #60a5fa; padding: 6px; border-radius: 6px; margin-right: 12px; font-size: 0.8rem;">🎯</span>
                                Supervised Learning
                            </h3>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                                <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #60a5fa;">
                                    <strong style="color: #60a5fa;">Linear Regression</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">Gradient descent optimization for continuous predictions</p>
                                </div>
                                <div style="background: rgba(168, 85, 247, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #a855f7;">
                                    <strong style="color: #a855f7;">Logistic Regression</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">Sigmoid activation for binary classification</p>
                                </div>
                                <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #22c55e;">
                                    <strong style="color: #22c55e;">k-Nearest Neighbors</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">Distance-based lazy learning algorithm</p>
                                </div>
                                <div style="background: rgba(251, 191, 36, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #fbbf24;">
                                    <strong style="color: #fbbf24;">Naïve Bayes</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">Probabilistic classifier with feature independence</p>
                                </div>
                                <div style="background: rgba(239, 68, 68, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #ef4444;">
                                    <strong style="color: #ef4444;">Decision Trees</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">Entropy-based recursive partitioning</p>
                                </div>
                                <div style="background: rgba(20, 184, 166, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #14b8a6;">
                                    <strong style="color: #14b8a6;">Random Forest</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">Bootstrap aggregating ensemble method</p>
                                </div>
                                <div style="background: rgba(147, 51, 234, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #9333ea;">
                                    <strong style="color: #9333ea;">Support Vector Machine</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">Maximum margin hyperplane optimization</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Unsupervised Learning Section -->
                        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; border: 1px solid #475569; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);">
                            <h3 style="color: #f59e0b; font-size: 1.5rem; font-weight: 600; margin: 0 0 25px 0; display: flex; align-items: center;">
                                <span style="background: #f59e0b; padding: 6px; border-radius: 6px; margin-right: 12px; font-size: 0.8rem;">🔍</span>
                                Unsupervised Learning
                            </h3>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                                <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #f59e0b;">
                                    <strong style="color: #f59e0b;">K-Means Clustering</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">Centroid-based partitional clustering</p>
                                </div>
                                <div style="background: rgba(99, 102, 241, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #6366f1;">
                                    <strong style="color: #6366f1;">Hierarchical Clustering</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">Agglomerative dendrogram construction</p>
                                </div>
                                <div style="background: rgba(236, 72, 153, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #ec4899;">
                                    <strong style="color: #ec4899;">Principal Component Analysis</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">Eigenvalue decomposition for dimensionality reduction</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Optimization Section -->
                        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; border: 1px solid #475569; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);">
                            <h3 style="color: #10b981; font-size: 1.5rem; font-weight: 600; margin: 0 0 25px 0; display: flex; align-items: center;">
                                <span style="background: #10b981; padding: 6px; border-radius: 6px; margin-right: 12px; font-size: 0.8rem;">⚡</span>
                                Optimization Algorithms
                            </h3>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #10b981;">
                                    <strong style="color: #10b981;">Gradient Descent</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">First-order iterative optimization algorithm</p>
                                </div>
                                <div style="background: rgba(139, 92, 246, 0.1); padding: 18px; border-radius: 8px; border-left: 3px solid #8b5cf6;">
                                    <strong style="color: #8b5cf6;">Stochastic Gradient Descent</strong>
                                    <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 0.95rem;">Mini-batch optimization for large datasets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(15, 23, 42, 0.8); padding: 35px; border-radius: 12px; margin: 50px 0; border: 1px solid #334155; text-align: center;">
                    <h2 style="font-size: 1.6rem; font-weight: 600; margin: 0 0 20px 0; color: #34d399;">
                        💡 Learning Objectives
                    </h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 30px;">
                        <div style="padding: 20px;">
                            <div style="background: #34d399; width: 40px; height: 40px; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">📚</div>
                            <h4 style="color: #e2e8f0; margin: 0 0 10px 0;">Deep Understanding</h4>
                            <p style="color: #94a3b8; font-size: 0.95rem; margin: 0;">Mathematical foundations and computational complexity</p>
                        </div>
                        <div style="padding: 20px;">
                            <div style="background: #60a5fa; width: 40px; height: 40px; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">🧠</div>
                            <h4 style="color: #e2e8f0; margin: 0 0 10px 0;">Problem Solving</h4>
                            <p style="color: #94a3b8; font-size: 0.95rem; margin: 0;">Strengthen skills for competitive programming and interviews</p>
                        </div>
                        <div style="padding: 20px;">
                            <div style="background: #f59e0b; width: 40px; height: 40px; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">🔧</div>
                            <h4 style="color: #e2e8f0; margin: 0 0 10px 0;">Implementation</h4>
                            <p style="color: #94a3b8; font-size: 0.95rem; margin: 0;">From-scratch coding without external ML libraries</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    recsys: {
        title: "Personality-Based Movie Recommendation System",
        content: `
            <div style="padding: 40px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; color: #f8fafc; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;">
                <h1 style="font-size: 2.5rem; font-weight: 700; margin: 0 0 30px 0; color: #ec4899; text-shadow: 0 2px 4px rgba(236, 72, 153, 0.3);">
                    Personality-Based Movie Recommendation System
                </h1>
                
                <div style="margin: 30px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
                    <img src="https://www.shutterstock.com/image-vector/cinema-hall-white-blank-screen-600nw-2469487413.jpg" 
                        alt="Movie Recommendation System" 
                        style="width: 100%; height: 350px; object-fit: cover; display: block;">
                </div>
                
                <div style="background: rgba(15, 23, 42, 0.6); padding: 30px; border-radius: 12px; margin: 40px 0; border-left: 4px solid #ec4899;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 20px 0; color: #e2e8f0; display: flex; align-items: center;">
                        <span style="background: #ec4899; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></span>
                        Innovation Focus
                    </h2>
                    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0; color: #cbd5e1;">
                        This cutting-edge recommendation system goes beyond traditional collaborative filtering by 
                        incorporating <strong style="color: #ec4899;">user personality traits</strong> to deliver 
                        truly personalized movie suggestions. By combining behavioral patterns with psychological 
                        profiling, the system captures both explicit preferences and deeper emotional connections 
                        to content.
                    </p>
                </div>
                
                <div style="margin: 50px 0;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 30px 0; color: #e2e8f0; display: flex; align-items: center;">
                        <span style="background: #10b981; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></span>
                        Current Achievements
                    </h2>
                    
                    <div style="display: grid; gap: 20px;">
                        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 25px; border-radius: 12px; border-left: 4px solid #10b981; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);">
                            <div style="display: flex; align-items: start; gap: 15px;">
                                
                                <div>
                                    <h3 style="color: #10b981; font-size: 1.2rem; margin: 0 0 10px 0;">Massive Dataset Integration</h3>
                                    <p style="color: #cbd5e1; margin: 0; line-height: 1.6;">Successfully merged MovieLens and TMDB datasets creating a comprehensive corpus of <strong>1M ratings</strong>, <strong>10K movies</strong>, and <strong>25K users</strong> for robust training and testing.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 25px; border-radius: 12px; border-left: 4px solid #3b82f6; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);">
                            <div style="display: flex; align-items: start; gap: 15px;">
                                
                                <div>
                                    <h3 style="color: #3b82f6; font-size: 1.2rem; margin: 0 0 10px 0;">Production-Ready Backend</h3>
                                    <p style="color: #cbd5e1; margin: 0; line-height: 1.6;">Developed a high-performance <strong>FastAPI backend</strong> with MySQL integration, successfully collecting over <strong>3,200 ratings from 125 active users</strong> in real-world testing.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 25px; border-radius: 12px; border-left: 4px solid #8b5cf6; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);">
                            <div style="display: flex; align-items: start; gap: 15px;">
                                
                                <div>
                                    <h3 style="color: #8b5cf6; font-size: 1.2rem; margin: 0 0 10px 0;">Advanced NLP Integration</h3>
                                    <p style="color: #cbd5e1; margin: 0; line-height: 1.6;">Implemented content-based recommender using <strong>Hugging Face Transformers</strong> for semantic similarity analysis, enabling deep understanding of movie content and user preferences.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 25px; border-radius: 12px; border-left: 4px solid #f59e0b; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);">
                            <div style="display: flex; align-items: start; gap: 15px;">
                                
                                <div>
                                    <h3 style="color: #f59e0b; font-size: 1.2rem; margin: 0 0 10px 0;">Personality Profiling</h3>
                                    <p style="color: #cbd5e1; margin: 0; line-height: 1.6;">Pioneered user personality extraction based on genre preferences, creating psychological profiles that enhance recommendation accuracy beyond traditional methods.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin: 50px 0;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 30px 0; color: #e2e8f0; display: flex; align-items: center;">
                        <span style="background: #ef4444; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></span>
                        Roadmap & Next Milestones
                    </h2>
                    
                    <div style="position: relative; padding-left: 30px;">
                        <!-- Timeline line -->
                        <div style="position: absolute; left: 15px; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, #ef4444, #ec4899, #8b5cf6, #3b82f6, #10b981);"></div>
                        
                        <div style="display: flex; flex-direction: column; gap: 25px;">
                            <div style="position: relative;">
                                <div style="position: absolute; left: -22px; top: 8px; width: 12px; height: 12px; background: #ef4444; border-radius: 50%; border: 2px solid #0f172a;"></div>
                                <div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #ef4444;">
                                    <h3 style="color: #ef4444; margin: 0 0 10px 0; font-size: 1.1rem;">Collaborative Filtering Implementation</h3>
                                    <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem;">Deploy matrix factorization and neighborhood-based algorithms for user-item interactions</p>
                                </div>
                            </div>
                            
                            <div style="position: relative;">
                                <div style="position: absolute; left: -22px; top: 8px; width: 12px; height: 12px; background: #ec4899; border-radius: 50%; border: 2px solid #0f172a;"></div>
                                <div style="background: rgba(236, 72, 153, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #ec4899;">
                                    <h3 style="color: #ec4899; margin: 0 0 10px 0; font-size: 1.1rem;">Hybrid Personality Model</h3>
                                    <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem;">Develop advanced personality-based recommendation engine combining psychological traits with viewing patterns</p>
                                </div>
                            </div>
                            
                            <div style="position: relative;">
                                <div style="position: absolute; left: -22px; top: 8px; width: 12px; height: 12px; background: #8b5cf6; border-radius: 50%; border: 2px solid #0f172a;"></div>
                                <div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #8b5cf6;">
                                    <h3 style="color: #8b5cf6; margin: 0 0 10px 0; font-size: 1.1rem;">Full-Stack Web Application</h3>
                                    <p style="color: #cbd5e1; margin: 0 0 10px 0; font-size: 0.95rem;">Complete user experience with authentication, search, rating, and personalized dashboards</p>
                                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; margin-top: 10px;">
                                        <span style="background: rgba(139, 92, 246, 0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #c4b5fd;">User Registration</span>
                                        <span style="background: rgba(139, 92, 246, 0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #c4b5fd;">Movie Search</span>
                                        <span style="background: rgba(139, 92, 246, 0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #c4b5fd;">Rating System</span>
                                        <span style="background: rgba(139, 92, 246, 0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #c4b5fd;">Favorites List</span>
                                        <span style="background: rgba(139, 92, 246, 0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #c4b5fd;">Watchlist</span>
                                        <span style="background: rgba(139, 92, 246, 0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #c4b5fd;">Viewing History</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="position: relative;">
                                <div style="position: absolute; left: -22px; top: 8px; width: 12px; height: 12px; background: #3b82f6; border-radius: 50%; border: 2px solid #0f172a;"></div>
                                <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #3b82f6;">
                                    <h3 style="color: #3b82f6; margin: 0 0 10px 0; font-size: 1.1rem;">Containerization & DevOps</h3>
                                    <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem;">Docker containerization for seamless deployment and scaling across environments</p>
                                </div>
                            </div>
                            
                            <div style="position: relative;">
                                <div style="position: absolute; left: -22px; top: 8px; width: 12px; height: 12px; background: #10b981; border-radius: 50%; border: 2px solid #0f172a;"></div>
                                <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #10b981;">
                                    <h3 style="color: #10b981; margin: 0 0 10px 0; font-size: 1.1rem;">Production Deployment</h3>
                                    <p style="color: #cbd5e1; margin: 0 0 10px 0; font-size: 0.95rem;">Enterprise-grade deployment with comprehensive monitoring and ML pipeline management</p>
                                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;">
                                        <span style="background: rgba(16, 185, 129, 0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #6ee7b7;">Prometheus</span>
                                        <span style="background: rgba(16, 185, 129, 0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #6ee7b7;">Grafana</span>
                                        <span style="background: rgba(16, 185, 129, 0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #6ee7b7;">Apache Airflow</span>
                                        <span style="background: rgba(16, 185, 129, 0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #6ee7b7;">MLFlow</span>
                                        <span style="background: rgba(16, 185, 129, 0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; color: #6ee7b7;">MySQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(15, 23, 42, 0.8); padding: 35px; border-radius: 12px; margin: 50px 0; border: 1px solid #334155; text-align: center;">
                    <h2 style="font-size: 1.6rem; font-weight: 600; margin: 0 0 20px 0; color: #ec4899;">
                        🎬 Technical Innovation
                    </h2>
                    <p style="color: #94a3b8; margin: 0 0 30px 0; font-size: 1.1rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                        Pioneering the integration of psychological profiling with traditional recommendation algorithms
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 25px; margin-top: 30px;">
                        <div style="padding: 20px;">
                            <div style="background: #ec4899; width: 50px; height: 50px; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">🧠</div>
                            <h4 style="color: #e2e8f0; margin: 0 0 10px 0;">Personality AI</h4>
                            <p style="color: #94a3b8; font-size: 0.95rem; margin: 0;">Genre preference analysis to build psychological user profiles</p>
                        </div>
                        <div style="padding: 20px;">
                            <div style="background: #3b82f6; width: 50px; height: 50px; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">🔗</div>
                            <h4 style="color: #e2e8f0; margin: 0 0 10px 0;">Hybrid Approach</h4>
                            <p style="color: #94a3b8; font-size: 0.95rem; margin: 0;">Combining collaborative filtering with content-based methods</p>
                        </div>
                        <div style="padding: 20px;">
                            <div style="background: #10b981; width: 50px; height: 50px; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">📈</div>
                            <h4 style="color: #e2e8f0; margin: 0 0 10px 0;">Scalable Architecture</h4>
                            <p style="color: #94a3b8; font-size: 0.95rem; margin: 0;">Production-ready system designed for millions of users</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    dsa: {
        title: "C++ Data Structures Implementation",
        content: `
            <div style="padding: 40px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; color: #f8fafc; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;">
                <h1 style="font-size: 2.5rem; font-weight: 700; margin: 0 0 30px 0; color: #06b6d4; text-shadow: 0 2px 4px rgba(6, 182, 212, 0.3);">
                    C++ Data Structures Implementation
                </h1>
                
                <div style="margin: 30px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
                    <img src="https://miro.medium.com/1*J38nYZU7gzu-4lQmtjlSUw.jpeg" 
                        alt="Data Structures and Algorithms" 
                        style="width: 100%; height: 350px; object-fit: cover; display: block;">
                </div>
                
                <div style="background: rgba(15, 23, 42, 0.6); padding: 30px; border-radius: 12px; margin: 40px 0; border-left: 4px solid #06b6d4;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 20px 0; color: #e2e8f0; display: flex; align-items: center;">
                        <span style="background: #06b6d4; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></span>
                        Foundation Philosophy
                    </h2>
                    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0; color: #cbd5e1;">
                        Started during my first year of college with a core belief: <strong style="color: #06b6d4;">to truly master something, 
                        you must understand its underlying mechanics</strong>. This project represents a journey from surface-level 
                        knowledge to deep comprehension of how fundamental data structures operate at the memory and algorithmic level. 
                        Every implementation prioritizes clarity, efficiency, and educational value.
                    </p>
                </div>
                
                <div style="margin: 50px 0;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 30px 0; color: #e2e8f0; display: flex; align-items: center;">
                        <span style="background: #8b5cf6; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></span>
                        Implementation Categories
                    </h2>
                    
                    <div style="display: grid; gap: 30px;">
                        <!-- Linear Structures -->
                        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; border: 1px solid #475569; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);">
                            <h3 style="color: #06b6d4; font-size: 1.5rem; font-weight: 600; margin: 0 0 25px 0; display: flex; align-items: center;">
                                <span style="background: #06b6d4; padding: 8px; border-radius: 8px; margin-right: 15px; font-size: 1rem;">📏</span>
                                Linear Data Structures
                            </h3>
                            <p style="color: #94a3b8; margin: 0 0 20px 0; font-size: 1rem; line-height: 1.6;">
                                Sequential memory organization with optimized traversal and manipulation algorithms
                            </p>
                            
                            <div style="display: grid; gap: 15px;">
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                                    <div style="background: rgba(6, 182, 212, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #06b6d4; transition: transform 0.2s;">
                                        <h4 style="color: #06b6d4; margin: 0 0 12px 0; font-size: 1.1rem; display: flex; align-items: center;">
                                            <span style="margin-right: 8px;">🔗</span>
                                            Linked Lists
                                        </h4>
                                        <p style="color: #cbd5e1; margin: 0 0 10px 0; font-size: 0.95rem;">Dynamic memory allocation with pointer manipulation</p>
                                        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                                            <span style="background: rgba(6, 182, 212, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #67e8f9;">Singly</span>
                                            <span style="background: rgba(6, 182, 212, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #67e8f9;">Doubly</span>
                                            <span style="background: rgba(6, 182, 212, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #67e8f9;">Circular</span>
                                        </div>
                                    </div>
                                    
                                    <div style="background: rgba(168, 85, 247, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #a855f7;">
                                        <h4 style="color: #a855f7; margin: 0 0 12px 0; font-size: 1.1rem; display: flex; align-items: center;">
                                            <span style="margin-right: 8px;">📚</span>
                                            Stack (LIFO)
                                        </h4>
                                        <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem;">Last-In-First-Out with push/pop operations</p>
                                        <div style="margin-top: 8px;">
                                            <span style="background: rgba(168, 85, 247, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #c084fc;">O(1) operations</span>
                                        </div>
                                    </div>
                                    
                                    <div style="background: rgba(34, 197, 94, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #22c55e;">
                                        <h4 style="color: #22c55e; margin: 0 0 12px 0; font-size: 1.1rem; display: flex; align-items: center;">
                                            <span style="margin-right: 8px;">⏭️</span>
                                            Queue (FIFO)
                                        </h4>
                                        <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem;">First-In-First-Out with enqueue/dequeue</p>
                                        <div style="margin-top: 8px;">
                                            <span style="background: rgba(34, 197, 94, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #86efac;">Circular buffer</span>
                                        </div>
                                    </div>
                                    
                                    <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #f59e0b;">
                                        <h4 style="color: #f59e0b; margin: 0 0 12px 0; font-size: 1.1rem; display: flex; align-items: center;">
                                            <span style="margin-right: 8px;">↔️</span>
                                            Deque
                                        </h4>
                                        <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem;">Double-ended queue with dual access points</p>
                                        <div style="margin-top: 8px;">
                                            <span style="background: rgba(245, 158, 11, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #fbbf24;">Both ends</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Tree Structures -->
                        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; border: 1px solid #475569; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);">
                            <h3 style="color: #10b981; font-size: 1.5rem; font-weight: 600; margin: 0 0 25px 0; display: flex; align-items: center;">
                                <span style="background: #10b981; padding: 8px; border-radius: 8px; margin-right: 15px; font-size: 1rem;">🌳</span>
                                Tree Data Structures
                            </h3>
                            <p style="color: #94a3b8; margin: 0 0 20px 0; font-size: 1rem; line-height: 1.6;">
                                Hierarchical structures with advanced balancing algorithms and efficient search operations
                            </p>
                            
                            <div style="display: grid; gap: 15px;">
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px;">
                                    <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #10b981;">
                                        <h4 style="color: #10b981; margin: 0 0 12px 0; font-size: 1.1rem; display: flex; align-items: center;">
                                            <span style="margin-right: 8px;">🌲</span>
                                            Binary Trees
                                        </h4>
                                        <p style="color: #cbd5e1; margin: 0 0 10px 0; font-size: 0.95rem;">Fundamental tree structure with two children per node</p>
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: rgba(16, 185, 129, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #6ee7b7;">Traversals</span>
                                            <span style="background: rgba(16, 185, 129, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #6ee7b7;">Recursion</span>
                                        </div>
                                    </div>
                                    
                                    <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #3b82f6;">
                                        <h4 style="color: #3b82f6; margin: 0 0 12px 0; font-size: 1.1rem; display: flex; align-items: center;">
                                            <span style="margin-right: 8px;">✅</span>
                                            Complete Binary Tree
                                        </h4>
                                        <p style="color: #cbd5e1; margin: 0 0 10px 0; font-size: 0.95rem;">Level-order filled tree with optimal space utilization</p>
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: rgba(59, 130, 246, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #93c5fd;">Array-based</span>
                                        </div>
                                    </div>
                                    
                                    <div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #8b5cf6;">
                                        <h4 style="color: #8b5cf6; margin: 0 0 12px 0; font-size: 1.1rem; display: flex; align-items: center;">
                                            <span style="margin-right: 8px;">🔍</span>
                                            Binary Search Tree
                                        </h4>
                                        <p style="color: #cbd5e1; margin: 0 0 10px 0; font-size: 0.95rem;">Ordered tree structure for efficient searching and sorting</p>
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: rgba(139, 92, 246, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #c4b5fd;">O(log n)</span>
                                            <span style="background: rgba(139, 92, 246, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #c4b5fd;">In-order</span>
                                        </div>
                                    </div>
                                    
                                    <div style="background: rgba(236, 72, 153, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #ec4899;">
                                        <h4 style="color: #ec4899; margin: 0 0 12px 0; font-size: 1.1rem; display: flex; align-items: center;">
                                            <span style="margin-right: 8px;">⚖️</span>
                                            AVL Tree
                                        </h4>
                                        <p style="color: #cbd5e1; margin: 0 0 10px 0; font-size: 0.95rem;">Self-balancing BST with height difference constraints</p>
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: rgba(236, 72, 153, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #f9a8d4;">Rotations</span>
                                            <span style="background: rgba(236, 72, 153, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #f9a8d4;">Balanced</span>
                                        </div>
                                    </div>
                                    
                                    <div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #ef4444;">
                                        <h4 style="color: #ef4444; margin: 0 0 12px 0; font-size: 1.1rem; display: flex; align-items: center;">
                                            <span style="margin-right: 8px;">📊</span>
                                            Heap & Priority Queue
                                        </h4>
                                        <p style="color: #cbd5e1; margin: 0 0 10px 0; font-size: 0.95rem;">Complete binary tree with heap property for priority operations</p>
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: rgba(239, 68, 68, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #fca5a5;">Min/Max</span>
                                            <span style="background: rgba(239, 68, 68, 0.2); padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; color: #fca5a5;">Heapify</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(15, 23, 42, 0.8); padding: 35px; border-radius: 12px; margin: 50px 0; border: 1px solid #334155;">
                    <h2 style="font-size: 1.8rem; font-weight: 600; margin: 0 0 25px 0; color: #e2e8f0; text-align: center;">
                        🎯 Learning Objectives & Achievements
                    </h2>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; margin: 30px 0;">
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: linear-gradient(135deg, #06b6d4, #0891b2); width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);">⚡</div>
                            <h3 style="color: #06b6d4; margin: 0 0 12px 0; font-size: 1.2rem;">Time Complexity Mastery</h3>
                            <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem; line-height: 1.6;">Deep understanding of Big O notation and algorithmic efficiency analysis for every implementation</p>
                        </div>
                        
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: linear-gradient(135deg, #10b981, #059669); width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">🧠</div>
                            <h3 style="color: #10b981; margin: 0 0 12px 0; font-size: 1.2rem;">Memory Management</h3>
                            <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem; line-height: 1.6;">Manual memory allocation, pointer arithmetic, and understanding of memory layout and optimization</p>
                        </div>
                        
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);">🏆</div>
                            <h3 style="color: #8b5cf6; margin: 0 0 12px 0; font-size: 1.2rem;">Competitive Programming</h3>
                            <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem; line-height: 1.6;">Enhanced problem-solving skills for coding competitions and technical interviews</p>
                        </div>
                        
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);">🔧</div>
                            <h3 style="color: #f59e0b; margin: 0 0 12px 0; font-size: 1.2rem;">From-Scratch Implementation</h3>
                            <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem; line-height: 1.6;">Zero dependency implementations using pure C++ without STL containers for true understanding</p>
                        </div>
                    </div>
                </div>
                
                <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; margin: 40px 0; border: 1px solid #475569;">
                    <h2 style="font-size: 1.6rem; font-weight: 600; margin: 0 0 20px 0; color: #e2e8f0; text-align: center;">
                        💡 Key Implementation Features
                    </h2>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 25px;">
                        <div style="background: rgba(6, 182, 212, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #06b6d4;">
                            <h4 style="color: #06b6d4; margin: 0 0 10px 0; display: flex; align-items: center;">
                                <span style="margin-right: 8px;">📝</span>
                                Comprehensive Documentation
                            </h4>
                            <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem;">Every function includes detailed comments explaining algorithm logic, time complexity, and use cases</p>
                        </div>
                        
                        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #10b981;">
                            <h4 style="color: #10b981; margin: 0 0 10px 0; display: flex; align-items: center;">
                                <span style="margin-right: 8px;">🧪</span>
                                Extensive Testing
                            </h4>
                            <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem;">Comprehensive test suites covering edge cases, performance benchmarks, and correctness validation</p>
                        </div>
                        
                        <div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #8b5cf6;">
                            <h4 style="color: #8b5cf6; margin: 0 0 10px 0; display: flex; align-items: center;">
                                <span style="margin-right: 8px;">🔄</span>
                                Iterative & Recursive Approaches
                            </h4>
                            <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem;">Multiple implementation strategies for each structure to demonstrate different algorithmic paradigms</p>
                        </div>
                        
                        <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #f59e0b;">
                            <h4 style="color: #f59e0b; margin: 0 0 10px 0; display: flex; align-items: center;">
                                <span style="margin-right: 8px;">⚡</span>
                                Performance Optimization
                            </h4>
                            <p style="color: #cbd5e1; margin: 0; font-size: 0.95rem;">Memory-efficient implementations with cache-friendly algorithms and minimal overhead</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};
