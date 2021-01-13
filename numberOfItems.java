public static int itemsInContainers(String s, int start, int end) {
            boolean first = false;
            boolean second = false;
            int i = start;
            int count = 0;
            int res = 0;
            while(i < end){
                if(s.charAt(i) == '*' && first == true){
                    count++;
                }
                
                if(s.charAt(i) == '|' && first == true){
                    second = true;    
                }
                if(s.charAt(i) == '|' && second == true){
                    res += count;
                    count = 0;
                    first = true;
                    second = false;
                }
                if(s.charAt(i) == '|' && first == false){
                    first = true;
                }
                i++;
            }
            return res;
     }
