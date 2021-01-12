double mind(int L, int R) {
    sort(arr+L, arr+R+1, cmpx); /// 按照x坐标排序以便分治
    double ans = 1e300; /// inf
    if(R-L+1 <= 3) { /// n<=3 暴力作，其实也可以不这么写
        for(int i = L; i <= R; i ++) { /// 也可以写成 n=2返回两点距离,n=1返回inf     
            for(int j = i+1; j <= R; j ++) {
                ans = min(ans, dist(arr[i], arr[j]));
            }
        }
    }else { /// 分治
        int mid = (L + R)/2; double midx = arr[mid].x; /// midx为中间分界线的横坐标
        ans = min(ans, mind(L,   mid));
        ans = min(ans, mind(mid+1, R)); /// 分治，ans即为上文中所说的d
        vector<node> avai; avai.clear(); /// 用vector存一下“竖条”中的点
        for(int i = L; i <= R; i ++) { /// 距离小于等于d（其实写小于也行）
            if(fabs(arr[i].x-midx) <= ans) avai.push_back(arr[i]);
        }
        double dnow = 1e300;
        sort(avai.begin(), avai.end(), cmpy); /// 按y排序
        for(int i = 0; i < avai.size(); i ++) {
            for(int j = i+1; j<avai.size(); j ++) {
                double d = dist(avai[i], avai[j]);
                if(d>ans && !same(d, ans)) break; 
                /// 及时break，y坐标之差大于d（写得很诡异，是为了避免精度误差的问题）
                dnow = min(dnow, d);
            }
        }
        ans = min(ans, dnow); avai.clear();
    }
    return ans;
}
